import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'
import { linkResolver } from '../utils/linkResolver'
import parseISO from 'date-fns/parseISO'
import Layout from '../components/Layout'
import SEO from '../components/SEO/seo.js'

export const query = graphql`
query Event {
  prismic {
    allEvents(sortBy: date_DESC) {
      edges {
        node {
          name
          info
          host
          date
          image
          eventlink {
            ... on PRISMIC__ExternalLink {
              url 
            }
          }
          _meta {
            id
            uid
            type
          }
        }
      }
    } 
  }
}
`;

const Wrapper = styled.div`
${tw`pt-20 max-w-screen-md m-auto`}
`;

const StyledEvent = styled.div`
${tw`p-4`}
`;

const Date = styled.p`
${tw`text-sm sm:text-base`}
font-family: 'PT Mono';
`;

const Event = ({ doc }) => {
  console.log(doc)
  return (
    <>
      {
        doc && doc.map((event, index) => {
          const date = parseISO(event.node.date)
          let formattedDate = Intl.DateTimeFormat('en-SE', {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
          }).format(date).toString();
          return (
            <StyledEvent key={index}>
              <Link to={linkResolver(event.node._meta)}>
                <RichText render={event.node.name} />
              </Link>
              <Date>{formattedDate}</Date>
              <RichText render={event.node.info} />
            </StyledEvent>
          )
        })
      }
    </>
  )
}
export default ({ data }) => {
  const doc = data.prismic.allEvents.edges
  if (!doc) return null;

  return (
    <Layout>
      <SEO title='Events' />
      <Wrapper>
        <Event doc={doc} />
      </Wrapper>
    </Layout>
  )
}