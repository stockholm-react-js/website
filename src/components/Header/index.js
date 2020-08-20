import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import scrollToElement from 'scroll-to-element'

const StyledLink = styled(Link)`
font-family: 'Made Dillan';
${tw`text-2xl`}
`;

const StyledHeader = styled.header`
${tw`flex justify-between items-center 
p-4 border-b border-gray-400 fixed top-0 left-0 right-0 z-10`}
background-color: #F4F3F2;

& ul {
  ${tw`flex`}
  li {
    ${tw`px-3 text-sm`}
  }
}
`;

const Header = () => {

  const handleLinkClick = (e, target) => {
    if (typeof window !== 'undefinned') {
      if (window.location.pathname === '/') {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -200,
          duration: 100,
        })
      }
    }
  }

  return (
    <StyledHeader>

      <StyledLink
        to='/'
      >
        Stockholm ReactJS Meetup
      </StyledLink>

      <nav>
        <ul>
          <li>
            <Link
              to='/#event'
              onClick={e => handleLinkClick(e, '#event')}
            >
              Events
            </Link>
          </li>
          <li>
            <Link to='/'
            >
              Meetup Group
            </Link>
          </li>
          <li>
            <Link to='/#contact'
              onClick={e => handleLinkClick(e, '#contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header