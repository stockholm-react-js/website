import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layout'
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

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Link to="/">back to list</Link>
    </Layout>
  )
}