import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from '../components/Layout'
import Slices from '../components/Slices'
import SEO from '../components/SEO/seo'

export const query = graphql`
query EventsQuery($uid: String) {
  prismic {
    allEvents(uid: $uid) {
      edges {
        node {
          name
          info
          image
          host
          date
          _linkType
          eventlink {
            _linkType
          }
          body {
            ... on PRISMIC_EventBodySchedule {
              type
              label
              primary {
                schedule
              }
            }
            ... on PRISMIC_EventBodySpeaker {
              type
              label
              primary {
                speaker_name
                talk_description
                title
              }
            }
          }
        }
      }
    }
  }
}
`;

const Container = styled.div`
${tw`sm:p-10 max-w-screen-md m-auto`}
`;
const EventImageContainer = styled.div`
${tw`max-w-screen-lg m-auto`}
`;

const HeadContainer = styled.div`
${tw`m-auto max-w-screen-md`}
& a {
  ${tw`max-w-screen-md px-10`}
}
& h1 {
  ${tw`text-3xl sm:text-4xl md:text-6xl m-auto text-center max-w-screen-md`}
}
`;

const LinkContainer = styled.div`
${tw`flex justify-between max-w-screen-md m-auto py-10 text-sm text-gray-800`}
  a:hover {
    ${tw`underline`}
  }
`;


const EventImage = ({ event }) => {

  if (!event) return null;

  return (
    <EventImageContainer>
      <img src={event.node.image.url}></img>
    </EventImageContainer>
  )
}

export default ({ data }) => {
  const event = data.prismic.allEvents.edges.slice(0, 1).pop()
  if (!event) return null;

  return (
    <Layout>
      <SEO title='Event' />
      <LinkContainer>
        <Link to="/">Home</Link>
        <Link to="/events">See all upcoming events</Link>
      </LinkContainer>

      <HeadContainer>
        <RichText render={event.node.name} />
      </HeadContainer>

      <Container>
        <div>
          <RichText render={event.node.info} />
        </div>
      </Container>

      <EventImage style={{ width: '150%' }} event={event} />

      <Container>
        <Slices slices={event.node.body} />
      </Container>
    </Layout >
  )
}