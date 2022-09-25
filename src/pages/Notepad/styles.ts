import styled, { keyframes } from "styled-components";

export const NotepadWrapper = styled.div`
  height: 100%;
`

const ContrastAnimation = keyframes`
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -200%;
  }
`

export const NotepadTitle = styled.span`
  color: ${({ theme }) => theme.colors.DARKEST};

  width: fit-content;
  font-size: 2rem;
  padding: 6px 12px;

  background: ${({ theme }) => `linear-gradient(to right, ${theme.colors.LIGHT} 50%, transparent 50%)`};
  background-size: 200%;
  background-position: 100%;
  mix-blend-mode: lighten;

  animation-name: ${ContrastAnimation};
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`

