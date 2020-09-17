import React from "react"
import PropTypes from "prop-types"
/* import { graphql, useStaticQuery } from "gatsby" */
import Header from '../Header'
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'


const Footer = styled.div`
${tw`pb-3 sm:pb-5 pt-10 px-4 sm:px-10 text-xs`}
font-family: 'PT Mono';
opacity: 1;
`;

const Wrapper = styled.div`
${tw`relative`}
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Wrapper>
        {children}
        <Footer>
          © {new Date().getFullYear()} Stockholm ReactJS Meetup
        </Footer>
        <div style={{ overflow: "hidden", position: 'absolute', bottom: '0', left: '0', zIndex: '-10', width: '100%' }} >
          {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100&', width: '100%' }}>
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#85a4de' }}>
            </path>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ height: '100%', width: '100%' }}>
            <path fill="rgb(133,191,226)" fill-opacity="1" d="M0,128L26.7,133.3C53.3,139,107,149,160,149.3C213.3,149,267,139,320,117.3C373.3,96,427,64,480,64C533.3,64,587,96,640,106.7C693.3,117,747,107,800,112C853.3,117,907,139,960,138.7C1013.3,139,1067,117,1120,96C1173.3,75,1227,53,1280,58.7C1333.3,64,1387,96,1413,112L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
          </svg>
        </div>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
