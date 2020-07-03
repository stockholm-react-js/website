import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

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
  font-size: 1.5rem;
  border-bottom: 1px solid #a6a6a6;
}
& div {
  ${tw`flex-1`}
}

`;

const Head = styled.p`
${ tw`mb-3`}
font-family: 'PT Mono';
`;

const MonoParagraph = styled.p`
font-family: 'PT Mono';
font-size: 0.8rem;
`;

const TextContent = ({ event, timeStamp }) => {
  return (
    <>
      <div>
        <article>
          <Head>/next event</Head>
          <RichText render={event.node.name} />
          <MonoParagraph>Date: {timeStamp}</MonoParagraph>
          <br />
          <RichText render={event.node.info} />
          <br />
          <MonoParagraph>Hosted By: {event.node.host[0].text}</MonoParagraph>
        </article>
      </div>
    </>
  )
}
const EventImage = ({ event }) => {
  return (
    <div>
      <img src={event.node.image.url}></img>
    </div>
  )
}


const EventSection = () => {
  const [eventIndex, setEventIndex] = useState(null)
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
        let eventDates = new Date(data.node.date).getTime()
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

  const event = data.prismic.allEvents.edges[eventIndex]

  useEffect(() => {
    if (!event) return;
    const timestamp = new Date(event.node.date)
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
          <TextContent event={event} timeStamp={timeStamp} />
          <EventImage event={event} />
        </ContentWrapper >
      ) : null}
    </>
  )
}

export default EventSection