import React from "react"
import PropTypes from "prop-types"
/* import { graphql, useStaticQuery } from "gatsby" */
import Header from '../Header'
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'


const Footer = styled.div`
${tw`pb-5 pt-10 px-10 text-xs`}
font-family: 'PT Mono';
`;

const Layout = ({ children }) => {
  /*  const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `) */

  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
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
