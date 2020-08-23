import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components';
import tw from 'twin.macro'

const Wrapper = styled.div`
${tw`mb-5`}
 & p:first-of-type {
  ${tw`text-base`}
  font-family: 'PT Mono';
 }
 & p:last-of-type {
   ${tw`text-lg py-1`}
   
 }
`;

const Speaker = ({ slice }) => {
  console.log(slice)
  return (
    <Wrapper>
      <RichText render={slice.primary.title} />
      <p>by {RichText.asText(slice.primary.speaker_name)}</p>
      <RichText render={slice.primary.talk_description} />
    </Wrapper>
  )
}

export default Speaker