import React from "react"
import { graphql } from "gatsby"
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactLogo from '../components/reactLogo'
import Layout from "../components/layout"
import StartSection from '../components/startSection'
import SEO from "../components/seo"


export const data = graphql`
query {
  prismic {
    allEvents {
      edges {
        node {
          name
        }
      }
    }
  }
}
`;


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <StartSection />
    </Layout>
  )
}

export default IndexPage
