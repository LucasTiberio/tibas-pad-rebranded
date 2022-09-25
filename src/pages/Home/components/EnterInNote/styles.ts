import styled, { keyframes } from "styled-components";

export const ENTER_IN_NOTE_BUTTON_SIZE = 48
const MIN_CONTAINER_WIDTH = '60px';

const CLOSE_INPUT_ANIMATION = keyframes`
  0% {
    max-width: 100%;
  }

  100% {
    max-width: ${MIN_CONTAINER_WIDTH};
  }
`

const OPEN_INPUT_ANIMATION = keyframes`
  0% {
    max-width: ${MIN_CONTAINER_WIDTH};
  }

  100% {
    max-width: 100%;
  }
`

export const Container = styled.div<{ opened: boolean }>`
  position: relative;
  width: 100%;
  margin: 0 auto;

  // Initial state
  max-width: ${({ opened }) => opened ? MIN_CONTAINER_WIDTH : '100%'};
  
  animation-delay: ${({ opened }) => opened ? '1.2s' : '0s'};
  animation-name: ${({ opened }) => opened ? OPEN_INPUT_ANIMATION : CLOSE_INPUT_ANIMATION};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;

  @media screen and (min-width: 650px) {
    animation-duration: 1s;
  }
`

export const EnterInNoteInput = styled.input`
  background: ${({ theme }) => theme.colors.LIGHTEST};
  border-radius: 40px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.DARKEST};

  font-size: 20px;

  padding: 18px 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    padding: 18px 24px;
  }
`

export const EnterInNoteButton = styled.button`
  border-radius: 100%;
  height: ${ENTER_IN_NOTE_BUTTON_SIZE}px;
  width: ${ENTER_IN_NOTE_BUTTON_SIZE}px;

  color: ${({ theme }) => theme.colors.LIGHTEST};
  background: ${({ theme }) => theme.colors.LIGHT};
  border: none;
  outline: none;

  font-size: 20px;

  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: ${ENTER_IN_NOTE_BUTTON_SIZE - 7}px;
    width: ${ENTER_IN_NOTE_BUTTON_SIZE - 7}px;
    border-radius: 100%;

    border: 1px solid white;
  }

  z-index: 2;
`