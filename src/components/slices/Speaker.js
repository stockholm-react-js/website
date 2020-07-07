import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components';
import tw from 'twin.macro'

const Wrapper = styled.div`
${tw`mb-5`}
`;

export default ({ slice }) => {
  if (!slice) return;
  return (
    <Wrapper>
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.speaker_name} />
      <RichText render={slice.primary.talk_description} />
    </Wrapper>
  )
}