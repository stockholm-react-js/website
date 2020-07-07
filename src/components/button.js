import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledButton = styled.button`
${tw`p-3 mr-5`}
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