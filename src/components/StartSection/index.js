import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ArrowDown from '../../assets/images/Arrow.svg'
import { ReactLogo } from '../Animation'
import Sketch from '../Sketches';
import SphereSketch from '../Sketches/SphereSketch'
import MassSketch from '../Sketches/MassSketch'


const SketchContainer = styled.div`
position: absolute;
z-index: -100;
`;


const Hero = styled.h1`
${tw`mt-5 px-4 sm:px-10 md:px-12 flex`}
font-family: 'poppins';
font-size: clamp(2.5rem, 8vw, 6rem);
text-transform: uppercase; 
`;

const ArrowWrapper = styled.div`
${tw`absolute bottom-0 mb-6`}
width: 1rem;
`;

const AboutWrapper = styled.div`
& p {
  ${tw`px-4 sm:px-8 md:px-12 sm:text-lg md:text-2xl`}
}
& a {
  text-decoration: underline;
}
`;

const Header = styled.header`
max-width: 60rem; 
margin: auto;
`;


const Arrow = () => (
  <ArrowWrapper>
    <img src={ArrowDown} alt='' />
  </ArrowWrapper>
)

const About = () => (
  <AboutWrapper>

    <p>A meetup group for people interested in talking about, learning more about and developing React applications together.</p>
    <p>We're always looking for speakers and sponsors. Feel free to contact us through&nbsp;
      <a
        href='https://www.facebook.com/groups/603541263829425'
        target='_blank'
        rel="noreferrer">
        Facebook
      </a>
      &nbsp;,&nbsp;
      <a href='mailto: stockholm.react.meetup@gmail.com'>
        Email
      </a>
       &nbsp;or at our&nbsp;
       <a href='https://www.meetup.com/Stockholm-ReactJS-Meetup'
        target='_blank'
        rel="noreferrer">
        Meetup Group
       </a>
        .
    </p>
  </AboutWrapper>
)

const StartSection = () => (
  <>
    <SketchContainer>
      <Sketch sketch={MassSketch} />
    </SketchContainer>
    <Header>
      {/* <ReactLogo /> */}
      <Hero>
        Stockholm ReactJS Meetup
      </Hero>
      <About />
    </Header>
    <Arrow />
  </>
)

export default StartSection