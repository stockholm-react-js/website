import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactLogo from './reactLogo'

const Section = styled.section`
display: flex; 
align-items: center; 
justify-content: center; 
height: 100vh; 

 & p {
  text-align: center;
}
`;

const StartSection = () => (
  <Section>
    <div>
      <ReactLogo></ReactLogo>
      <p>
        <span>Stockholm ReactJS Meetup</span>
      </p>
    </div>
  </Section>
)

export default StartSection