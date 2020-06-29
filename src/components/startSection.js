import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactLogo from './reactLogo'
import ArrowDown from '../assets/images/Arrow-Down.svg'

const Hero = styled.h1`
${tw`mt-5 text-center`}
font-family: 'PT Mono';
`;

const Wrapper = styled.div`
${tw`absolute bottom-0 mb-6`}
`;

const Img = styled.img`
`;

const Arrow = () => (
  <Wrapper>
    <Img src={ArrowDown} alt='Arrow pointing downwards' />
  </Wrapper>
)

const StartSection = () => (
  <>
    <div>
      <ReactLogo />
      <Hero>
        <span>Stockholm ReactJS Meetup</span>
      </Hero>
    </div>
    <Arrow />
  </>
)

export default StartSection