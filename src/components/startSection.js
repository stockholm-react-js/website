import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactLogo from './reactLogo'
import ArrowDown from '../assets/images/Arrow-Down.svg'

const Hero = styled.h1`
${tw`mt-5 text-2xl sm:text-4xl px-12 md:text-5xl sm:px-10 text-center sm:text-left`}
font-family: 'Made Dillan';
`;

const ArrowWrapper = styled.div`
${tw`absolute bottom-0 mb-6`}
`;

const AboutWrapper = styled.div`
& h2 {
  ${tw`px-12`}
  font-family: 'PT Mono';
  font-size: 1.5rem;
}
& p {
  ${tw`px-12`}
  font-size: 1.2rem;
  ${tw`text-lg sm:text-xl md:text-2xl`}
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
    <p>A group for people interested in talking about, learning more about and developing React applications together.</p>
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