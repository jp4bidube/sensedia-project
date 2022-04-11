import { createGlobalStyle } from 'styled-components'
export const fontFamily = `"Roboto Bold", "Roboto Regular", Roboto, sans-serif`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${fontFamily};
    font-feature-settings: 'lnum';
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }
  `
