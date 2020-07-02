import React from 'react'
import tw from 'twin.macro'
import Logo from '../assets/images/react-logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
${tw`m-auto absolute`}
top: -100px;
right: -100px;
animation: ${rotate} 20s linear infinite;
height: 60vmax;
width: 60vmax;
max-height: 99vh;
max-width: 99vh;
z-index: -1;
`;

const ReactLogo = () => (
  <Img src={Logo} alt='ReactJS Logo' />
)


export default ReactLogo
