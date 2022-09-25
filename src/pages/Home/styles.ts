import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 4rem 2rem;

  @media screen and (min-width: 768px) {
    max-width: 1000px;
    margin: auto;
  }

  @media screen and (min-height: 750px) {
    padding-top: 3rem;
  }

  @media screen and (min-height: 1080px) {
    padding-top: 5rem;
  }
`

export const HomeTitle = styled.p`
  color: ${({ theme }) => theme.colors.LIGHTEST};
  font-size: 4rem;
  line-height: 4rem;

  @media screen and (min-width: 768px) {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
`

const ContrastAnimation = keyframes`
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -200%;
  }
`

export const HomeTextWithContrast = styled.span`
  background: ${({ theme }) => `linear-gradient(to right, ${theme.colors.LIGHT} 50%, transparent 50%)`};
  background-size: 200%;
  background-position: 100%;

  mix-blend-mode: lighten;
  
  animation-name: ${ContrastAnimation};
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  color: ${({ theme }) => theme.colors.DARKEST};
  
  padding: 2px 12px;
`
