import { createGlobalStyle } from 'styled-components';
import PTMono from './src/assets/font/PTMono-Regular.ttf';
import MadeDillan from './src/assets/font/made-dillan.woff';
import MadeDillan2 from './src/assets/font/made-dillan.woff2';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F4F3F2; /* whitesmoke */
  max-width: 100vw;
}

h1 {
  ${tw`text-xl lg:text-2xl`}
  font-family: 'PT Mono';
  letter-spacing: 1.2px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

p {
  ${tw`text-base sm:text-lg lg:text-xl`}
}

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'PT Mono';
  font-weight: normal; 
  src: url(${PTMono}) format('truetype');
}

@font-face {
  font-family: 'Made Dillan';
  font-weight: normal;
  src: url(${MadeDillan}) format('woff'), url(${MadeDillan2}) format('woff2');
}
`;

export default GlobalStyle