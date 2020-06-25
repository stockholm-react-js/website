import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactLogo from './reactLogo'


const Hero = styled.h1`
${tw`mt-5 text-center`}
`;

const StartSection = () => (
  <div>
    <ReactLogo />
    <Hero>
      <span>Stockholm ReactJS Meetup</span>
    </Hero>
  </div>
)

export default StartSection