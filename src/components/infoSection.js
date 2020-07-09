import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import PostSlices from '../components/PostSlices'

const Wrapper = styled.div`
${tw`text-center`}

& h1 {
  ${tw`text-4xl p-2`}
}
`;

const ContactLinkContainer = styled.div`
${tw`flex justify-between px-48 py-10`}
`;
const InfoSection = ({ data }) => {
  return (
    <Wrapper>
      <RichText render={data.node.headline} />
      <ContactLinkContainer>
        <PostSlices slices={data.node.body} />
      </ContactLinkContainer>
    </Wrapper>
  )
}

export default InfoSection