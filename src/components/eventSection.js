import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import parseISO from 'date-fns/parseISO'
import tw from 'twin.macro'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import Button from '../components/button'

const ContentWrapper = styled.div`
${tw`sm:flex sm:px-10 justify-center max-w-screen-xl`}
 & article {
  ${tw`sm:p-5 sm:pr-5 w-full`}
}

 & img {
  ${tw`sm:pl-5 w-full h-full`}
  object-fit: cover;
  object-position: center center;
}
 & h1 {
  ${tw`py-1`}
  font-weight: bold;
  border-bottom: 1px solid #a6a6a6;
}
`;

const Head = styled.p`
${ tw`mb-3`}
font-family: 'PT Mono';
`;
const MonoParagraph = styled.p`
${tw`text-sm sm:text-base`}
font-family: 'PT Mono';
`;

const TextContentWrapper = styled.div`
${tw`p-5 sm:p-0 flex-1`}
`;
const EventImageWrapper = styled.div`
${tw`flex-1 sm:order-2`}
`;
const ButtonWrapper = styled.div`
${tw`pt-3 justify-between sm:justify-start`}
display: flex;

`;

const TextContent = ({ event, timeStamp }) => {
  const handleClick = () => console.log('test')

  return (
    <>
      <TextContentWrapper>
        <article>
          <Head>/next event</Head>
          <RichText render={event.node.name} />
          <MonoParagraph>Date: {timeStamp}</MonoParagraph>
          <br />
          <RichText render={event.node.info} />
          <br />
          <MonoParagraph>Hosted By: {event.node.host[0].text}</MonoParagraph>
          <ButtonWrapper>
            <Button
              label='Attend Event' handleClick={handleClick} />
            <Button
              label='More upcoming events' handleClick={handleClick} />
          </ButtonWrapper>
        </article>
      </TextContentWrapper>
    </>
  )
}
const EventImage = ({ event }) => {
  return (
    <EventImageWrapper>
      <img src={event.node.image.url}></img>
      <div></div>
    </EventImageWrapper>
  )
}


const EventSection = () => {
  const [eventIndex, setEventIndex] = useState(null)
  const [event, setEvent] = useState(null)
  const [timeStamp, setTimeStamp] = useState('')


  const data = useStaticQuery(graphql`
query {
  prismic {
    allEvents {
      edges {
        node {
          info
          name
          host
          date
          image
        }
      }
    }
  }
}
`);

  useEffect(() => {
    const allDoc = data.prismic.allEvents.edges
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
    setEventIndex(nearestEvent(allDoc))
  }, [])

  useEffect(() => {
    const event = data.prismic.allEvents.edges[eventIndex]
    setEvent(event)
  }, [eventIndex])

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
      {event ? (
        <ContentWrapper>
          <EventImage event={event} />
          <TextContent event={event} timeStamp={timeStamp} />
        </ContentWrapper >
      ) : null}
    </>
  )
}

export default EventSection