import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled.div`
${tw`mb-5`}
& ul > li  {
  font-family: 'PT Mono';
}
`;

const Schedule = ({ slice }) => {
  if (!slice) return;
  return (
    <Wrapper>
      <RichText render={slice.primary.schedule} />
    </Wrapper>
  )
}

export default Schedule