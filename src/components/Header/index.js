import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledLink = styled(Link)`
font-family: 'Made Dillan';
${tw`text-2xl`}
`;

const StyledHeader = styled.header`
${tw`flex justify-between items-center p-4 border-b border-gray-400`}

& ul {
  ${tw`flex`}
  li {
    ${tw`px-3 text-sm`}
  }
}
`;

const Header = () => {
  return (
    <StyledHeader>

      <StyledLink to='/'>Stockholm ReactJS Meetup</StyledLink>

      <nav>
        <ul>
          <li>
            <Link to='/events'>Events</Link>
          </li>
          <li>
            <Link to='/'>Meetup Group</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header