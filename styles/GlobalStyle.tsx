import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: white;
    --primary: #333333;
  }
  
  [data-theme='dark'] {
    --background: black;
    --primary: #dddddd;
  }

  html, body {
    margin: 0;
    padding:
      env(safe-area-inset-top, 1rem)
      env(safe-area-inset-right, 1rem)
      env(safe-area-inset-bottom, 1rem)
      env(safe-area-inset-left, 1rem);
    
    box-sizing: border-box;
    background-color: var(--background);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`
export default GlobalStyle
