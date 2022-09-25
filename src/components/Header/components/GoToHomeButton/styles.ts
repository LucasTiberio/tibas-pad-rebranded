import styled, { keyframes } from "styled-components";

const leftArrowAnimation = keyframes`
  80%,100%{transform: translate(calc(100% + var(--s,0%)))}
`

export const LeftArrow = styled.div`
  width: 50px;
  height: 30px;
  display: grid;
  overflow: hidden;
  transform: rotate(180deg);

  &::after, &::before {
    content: "";

    grid-area: 1/1;
    clip-path: polygon(0 10px,calc(100% - 15px) 10px,calc(100% - 15px) 0,100% 50%,calc(100% - 15px) 100%,calc(100% - 15px) calc(100% - 10px),0 calc(100% - 10px));
    transform: translate(calc(0% + var(--s,0%)));

    background: ${({ theme }) => theme.colors.LIGHT};
  }

  &::after {
    --s:-100%;
  }

  &:hover {
    &::after, &::before {
      animation: ${leftArrowAnimation} 1s infinite;
    }
  }
`