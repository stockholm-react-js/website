import React from 'react'
import Lottie from 'react-lottie'
import ReactAnimation from '../../assets/lottie/react.json'
import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
${tw`m-auto absolute`}
animation: ${rotate} 20s linear infinite;
/* right: -300px; */ 
top: 50px;
left: 50px;
width: 10vmin;
height: 10vmin;
z-index: -1;
`;

export const ReactLogo = () => {
  const options = {
    loop: false,
    autoplay: true,
    animationData: ReactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <Wrapper>
      <Lottie
        options={options}
        isClickToPauseDisabled={true}
        speed={0.5}
      />
    </Wrapper>
  )
}