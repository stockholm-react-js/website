import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import tw from 'twin.macro'
import styled from 'styled-components'
import { RichText, Date } from 'prismic-reactjs'


const ContentWrapper = styled.div`
${tw`sm:flex sm:px-10 justify-center max-w-screen-xl`}

 article {
  ${tw`p-5 sm:p-0 w-full`}
}

 img {
  ${tw`sm:pl-5 w-full h-full`}
  object-fit: cover;
  object-position: center center;
}
 h1 {
  ${tw`py-1`}
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 1px solid #a6a6a6;
}
`;

const Head = styled.p`
${tw`mb-3`}
font-family: 'PT Mono';
`;

const MonoParagraph = styled.p`
font-family: 'PT Mono'; 
font-size: 0.8rem;
`;

const EventSection = () => {
  const data = useStaticQuery(graphql`
  query {
  prismic {
    allEvents {
      edges {
        node {
          info
          name
          host
          date
          image
        }
      }
    }
  }
}
  `);

  const doc = data.prismic.allEvents.edges.slice(0, 1).pop()
  const timestamp = Date(doc.node.date)

  let formattedTimestamp = Intl.DateTimeFormat('en-SE', {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp).toString();

  return (
    <ContentWrapper>

      <div>
        <article>
          <Head>/next event</Head>
          <RichText render={doc.node.name} />
          <MonoParagraph>Date: {formattedTimestamp} </MonoParagraph>
          <br />
          <RichText render={doc.node.info} />
          <br />
          <MonoParagraph>Hosted By: {doc.node.host[0].text}</MonoParagraph>
        </article>
      </div>

      <div>
        <img src={doc.node.image.url}></img>
      </div>

    </ContentWrapper>
  )
}

export default EventSection