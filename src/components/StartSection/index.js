import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
/* import ReactLogo from './reactLogo' */
import ArrowDown from '../../assets/images/Arrow-Down.svg'
import { ReactLogo } from '../Animation'


const Hero = styled.h1`
${tw`mt-5 sm:px-10 text-center sm:text-left`}
font-family: 'Made Dillan';
font-size: clamp(3em, 6vw, 6em);
`;

const ArrowWrapper = styled.div`
${tw`absolute bottom-0 mb-6`}
`;

const AboutWrapper = styled.div`
& h2 {
  ${tw`px-10 text-xl sm:text-xl md:text-2xl`}
  font-family: 'PT Mono';
}
& p {
  ${tw`px-10 text-base sm:text-lg md:text-xl sm:w-1/2`}
}
`;


const Arrow = () => (
  <ArrowWrapper>
    <img src={ArrowDown} alt='Arrow pointing downwards' />
  </ArrowWrapper>
)

const About = () => (
  <AboutWrapper>
    <h2>what we're about</h2>
    <p>A meetup group for people interested in talking about, learning more about and developing React applications together.</p>
  </AboutWrapper>
)

const StartSection = () => (
  <>
    <ReactLogo />
    <div>
      <Hero>
        Stockholm ReactJS Meetup
      </Hero>
      <About />
    </div>
    <Arrow />
  </>
)

export default StartSection