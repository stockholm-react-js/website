import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'


const EventImageWrapper = styled.div`
${tw`flex-1 sm:order-2`}
`;

const EventImage = ({ event }) => {
  if (!event) return null;

  return (
    <EventImageWrapper id='event'>
      <img src={event.node.image.url}></img>
    </EventImageWrapper>
  )
}

export default EventImage