import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'
import WobbleSketch from '../Sketches/WobbleSketch'
import Sketch from '../Sketches';


const Footer = styled.div`
${tw`pb-3 sm:pb-5 pt-10 px-4 sm:px-10 text-xs`}
font-family: 'PT Mono';
opacity: 1;
`;

const Main = styled.main`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 80rem;
    margin: auto;
    padding: 0 3.5rem;

`;

const SketchContainer = styled.div`
position: absolute;
z-index: -100;
`;




const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            {/* <Header /> */}
            {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
            <SketchContainer>
                <Sketch sketch={WobbleSketch} />
            </SketchContainer>

            <Main>
                {children}
            </Main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
