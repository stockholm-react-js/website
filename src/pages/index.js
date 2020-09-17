import React from "react"
import tw from 'twin.macro'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import StartSection from '../components/StartSection'
import EventSection from '../components/EventSection'
import SEO from '../components/SEO/seo'

const Section = styled.section`
${tw`relative overflow-hidden`}
margin-top: 5rem;
min-height: 70vh;
`;

const HeroSection = styled.section`
${tw`relative h-screen flex justify-center items-center overflow-hidden`}
`;

export const query = graphql`
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

const IndexPage = ({ data }) => {
  if (!data) return null

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection>
        <StartSection />
      </HeroSection>
      <Section>
        <EventSection data={data} />
      </Section>
    </Layout>
  )
}

export default IndexPage
