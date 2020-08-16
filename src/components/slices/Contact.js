import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
width: 50px;
`;

export default ({ slice }) => {
  if (!slice) return;
  const doc = slice.fields.slice(0, 1).pop()
  console.log(doc)
  return (
    <div>
      <a href={doc.contact_link.url}>
        <Img src={doc.contact_logo.url} />
      </a>
    </div>
  )
}