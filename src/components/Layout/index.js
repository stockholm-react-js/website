import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'
import Animation from '../Sketches/Animation'
import Sketch from '../Sketches';


const Main = styled.main`
    ${tw`
        grid
        w-full sm:w-9/12 md:w-9/12 lg:w-9/12 xl:w-9/12
        px-2 sm:px-0 m-auto h-screen
    `}
    place-items: center;
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
                <Sketch sketch={Animation} />
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
