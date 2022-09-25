import { createGlobalStyle } from "styled-components";
import DSTheme from "./theme";

interface iGlobalStyle {
  hideCursor: boolean;
  theme: typeof DSTheme
}

export default createGlobalStyle<iGlobalStyle>`
  html, body {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    
    margin: 0;
    padding: 0;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    background: ${({ theme }) => theme.colors.DARK};
    /* background-image: ${({ theme }) => `linear-gradient(19deg, ${theme.colors.DARKEST} 0%, ${theme.colors.DARK} 100%)`}; */

    transition: background 0.4s ease-in-out;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  * {
    cursor: ${({ hideCursor }) => hideCursor ? 'none' : 'auto'} !important;
    box-sizing: border-box;
  }
`