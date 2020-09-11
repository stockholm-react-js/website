import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import { linkResolver } from '../../utils/linkResolver'


const Paragraph = styled.p`
${tw`text-sm sm:text-base`}
font-family: 'PT Mono';
`;

const TextContentWrapper = styled.div`
${tw`px-4 sm:px-0 sm:p-0 flex-1`}
`;

const EventTitle = styled.h2`
font-size: clamp(2rem, 4vw, 4rem);
`;

const EventInfo = styled.p`
${tw`text-sm sm:text-base md:text-xl`}
`;

const StyledLink = styled(Link)`
${tw`underline`}
`;


const EventContent = ({ event, timeStamp }) => {
  return (
    <>
      <TextContentWrapper>
        <article>
          <Link to={linkResolver(event.node._meta)}>
            <EventTitle>
              {event.node.name[0].text}
            </EventTitle>
          </Link>

          <Paragraph>
            Date: {timeStamp}
          </Paragraph>
          <br />

          <EventInfo>
            {event.node.info[0].text}
          </EventInfo>
          <br />

          <Paragraph>Hosted By: {event.node.host[0].text}</Paragraph>
          <br />

          <p>
            <StyledLink to={linkResolver(event.node._meta)}>
              Read more
              </StyledLink>
               &nbsp;and attend&nbsp;
              <StyledLink to='/'>
              here
              </StyledLink>
              .
          </p>
        </article>
      </TextContentWrapper>
    </>
  )
}

export default EventContent