import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledButton = styled.button`
${tw`p-2 sm:p-3 sm:mr-4 rounded text-sm md:text-base outline-none appearance-none`}
background-color: #D7E1D8;

&:hover {
  background-color: lightblue; 
}
`;

const Button = ({ label, handleClick }) => (
  <StyledButton onClick={handleClick}>
    {label}
  </StyledButton>
)

export default Button