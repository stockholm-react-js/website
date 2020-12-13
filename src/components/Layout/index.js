import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from '../../../globalStyle'
import styled from 'styled-components'
import Animation from '../Sketches/Animation'
import Sketch from '../Sketches';
import Logo from '../../assets/images/Logo_base.png'

const Main = styled.main`
    display: grid;
    place-items: center;
    width: 100%;
    padding: 0rem 0.5rem;
    margin: auto;
    height: calc(100vh - 132px);
    @media (min-width: 640px) {
        width: 75%;
        padding: 0;
    }    
`;

const Img = styled.img`
    width: 3rem;
    height: auto;
    margin: 0.5rem;
    border-radius: 50%;
    @media (min-width: 640px) {
        width: 5rem;
        margin: 1rem;
    }
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
