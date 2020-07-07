import React from "react"
import tw from 'twin.macro'
import styled from 'styled-components'

import Layout from "../components/layout"
import StartSection from '../components/startSection'
import EventSection from '../components/eventSection'
import InfoSection from '../components/infoSection'
import SEO from "../components/seo"

const Section = styled.section`
${tw`relative flex justify-center items-center overflow-hidden pt-20`}
min-height: 100vh;
`;

const HeroSection = styled.section`
${tw`relative h-screen flex justify-center items-center overflow-hidden`}
`;
// create seperate section for StartSection later on. 
//The other section - elements dont need overflow-hidden or pos relative.

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection>
        <StartSection />
      </HeroSection>
      <Section>
        <EventSection />
      </Section>
      <Section>
        <InfoSection />
      </Section>
    </Layout>
  )
}

export default IndexPage
