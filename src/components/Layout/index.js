import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import tw from 'twin.macro'
import Animation from '../Sketches/Animation'
import Sketch from '../Sketches';
import Logo from '../../assets/images/Logo_base.png'

const Main = styled.main`
    ${tw`
        grid
        w-full sm:w-9/12 md:w-9/12 lg:w-9/12 xl:w-9/12
        px-2 sm:px-0 
        m-auto 
    `}
    height: calc(100vh - 132px);
    place-items: center;
`;

const Img = styled.img`
${tw`sm:w-20 w-12 h-auto m-2 sm:m-4`}
    /* width: 100px; */
    border-radius: 50%;
`;

const SketchContainer = styled.div`
position: absolute;
z-index: -100;
`;


const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Img src={Logo}></Img>

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
