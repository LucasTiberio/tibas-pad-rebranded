import styled, { keyframes } from 'styled-components';
import Spinner from '../Spinner';
import { iUpward } from './interface';

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 5;
  overflow: hidden;
`

const upwardAnimation = keyframes`
  0% {
    max-height: 100%;
  }

  100% {
    max-height: 0%;
  }
`

export const UPWARD_ANIMATION_DURATION_MS = 600;
export const UpwardTransitionItem = styled.div<iUpward>`
  max-height: 100%;
  height: 100%;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};

  animation-duration: ${UPWARD_ANIMATION_DURATION_MS}ms;
  animation-delay: ${({ delay }) => delay};
  animation-name: ${({ startAnimation }) => startAnimation ? upwardAnimation : ''};
  animation-timing-function: ease-in-out;

  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;

  position: relative;
  /* display: flex; */
  align-items: center;
  justify-content: center;
`

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
`