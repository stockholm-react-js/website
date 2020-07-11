import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'

const Footer = styled.div`
${tw`px-5 py-2 text-sm`}
font-family: 'PT Mono';
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        {children}
        <Footer>
          © {new Date().getFullYear()} Stockholm ReactJS Meetup
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
