import styled, { keyframes } from 'styled-components';
import { iUpward } from './interface';

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 5;
  overflow: hidden;

  pointer-events: none;
`

const upwardAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-100%);
  }
`

export const UPWARD_ANIMATION_DURATION_MS = 500;
export const UpwardTransitionItem = styled.div<iUpward>`
  height: 100%;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};

  animation-duration: ${UPWARD_ANIMATION_DURATION_MS}ms;
  animation-delay: ${({ delay }) => delay};
  animation-name: ${({ startAnimation }) => startAnimation ? upwardAnimation : ''};
  animation-timing-function: ease-out;

  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;

  position: absolute;
  left: 0;
  top: 0;

  z-index: ${({ index }) => 500 - index};
`

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`