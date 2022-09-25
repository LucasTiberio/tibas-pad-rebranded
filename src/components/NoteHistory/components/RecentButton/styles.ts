import styled from "styled-components";

export const StyledButton = styled.span`
  position: relative;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  border: ${({ theme }) => `1px solid ${theme.colors.DARKEST}`};
  color: black;
  cursor: pointer;

  padding: 10px 20px;

  z-index: 0;
  &::before {
    content: '';
    z-index: -1;
    
    position: absolute;
    top: 10%;
    left: 5%;

    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.LIGHT};

    transition: all 0.2s ease-in-out;
  }
  
  &:hover::before {
    top: 0%;
    left: 0%;
  }
`