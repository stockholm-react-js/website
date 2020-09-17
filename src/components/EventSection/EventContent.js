import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import { linkResolver } from '../../utils/linkResolver'


const Stamp = styled.p`
${tw`text-sm sm:text-base`}
font-family: 'PT Mono';
`;

const TextContentWrapper = styled.div`
${tw`px-4 sm:px-0 sm:p-0 flex-1`}

& a {
  ${tw`underline`};
}
`;

const EventTitle = styled.h2`
font-size: clamp(2rem, 4vw, 4rem);
`;

const EventInfo = styled.p`
${tw`text-sm sm:text-base md:text-xl`}
`;


const EventContent = ({ event, timeStamp }) => {
  console.log(event)
  return (
    <>
      <TextContentWrapper>
        <article>
          <EventTitle>
            {event.node.name[0].text}
          </EventTitle>

          <Stamp>
            Date: {timeStamp}
          </Stamp>
          <br />

          <EventInfo>
            {event.node.info[0].text}
          </EventInfo>
          <br />

          <Stamp>Hosted By: {event.node.host[0].text}</Stamp>
          <br />

          <p>
            <Link to={linkResolver(event.node._meta)}>
              Read more
              </Link>
               &nbsp;and attend&nbsp;
            <a
              href={event.node.eventlink.url}
              target='_blank'
              rel="noreferrer"
            >
              here
            </a>
              .
          </p>
        </article>
      </TextContentWrapper>
    </>
  )
}

export default EventContent