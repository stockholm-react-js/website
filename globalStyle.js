import { createGlobalStyle } from 'styled-components';
import PTMono from './src/assets/font/PTMono-Regular.ttf';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F4F3F2; /* whitesmoke */
  max-width: 100vw;
}

h1 {
  font-size: 1rem;
  font-family: 'PT Mono';
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

* {
   margin: 0;
   padding: 0; 
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'PT Mono';
  font-weight: normal; 
  src: url(${PTMono});
}

`;

export default GlobalStyle