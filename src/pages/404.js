import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import SEO from "../components/SEO/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Error>PAGE NOT FOUND!</Error>
  </Layout>
)

const Error = styled.p`
  font-family: 'poppins';
`;
export default NotFoundPage
