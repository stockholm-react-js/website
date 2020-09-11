import React, { useEffect, useState } from 'react'

import parseISO from 'date-fns/parseISO'
import tw from 'twin.macro'
import styled from 'styled-components'

import EventContent from './EventContent'
import EventImage from './EventImage'
import Sketch from '../Sketches'
import SineWaveSketch from '../Sketches/SineWaveSketch'

const ContentWrapper = styled.div`
${tw`sm:flex sm:px-10 justify-center`}
 & article {
  ${tw`sm:pr-5 w-full`}
}
 & img {
  ${tw`sm:pl-5 w-full h-full`}
  object-fit: cover;
  object-position: center center;
}
 & h1 {
  ${tw`py-1`}
  border-bottom: 1px solid #a6a6a6;
}
`;

const SketchContainer = styled.div`
${tw`flex justify-center`}
z-index: -100;
margin-top: 5rem;
`;






const EventSection = ({ data }) => {
  const [eventIndex, setEventIndex] = useState(null)
  const [event, setEvent] = useState(null)
  const [timeStamp, setTimeStamp] = useState('')

  useEffect(() => {
    const doc = data.prismic.allEvents.edges
    let nearestEvent = function (dates) {
      let currentDate = new Date().getTime()
      let nearest = Infinity
      let winner = -1

      dates.forEach(function (data, index) {
        /* let eventDates = new Date(Date.parse(data.node.date)).getTime() */
        let eventDates = parseISO(data.node.date)
        let distance = Math.abs(eventDates - currentDate)

        if (eventDates >= currentDate && (eventDates < new Date(nearest) || distance < nearest)) {
          nearest = distance
          winner = index
        }
      })
      return winner
    }
    setEventIndex(nearestEvent(doc))
  }, [data.prismic.allEvents.edges])

  useEffect(() => {
    const event = data.prismic.allEvents.edges[eventIndex]
    setEvent(event)
  }, [eventIndex, data.prismic.allEvents.edges])

  useEffect(() => {
    if (!event) return;
    const timestamp = parseISO(event.node.date)
    let formattedTimestamp = Intl.DateTimeFormat('en-SE', {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
    }).format(timestamp).toString();
    setTimeStamp(formattedTimestamp)
  }, [event])


  return (
    <>
      <SketchContainer>
        <Sketch sketch={SineWaveSketch} />
      </SketchContainer>
      {event ? (
        <ContentWrapper>
          <EventImage event={event} />
          <EventContent event={event} timeStamp={timeStamp} />
        </ContentWrapper >
      ) : null}
    </>
  )
}

export default EventSection