import { createGlobalStyle } from 'styled-components';
import PTMono from './src/assets/font/PTMono-Regular.ttf';
import MadeDillan from './src/assets/font/made-dillan.woff';
import MadeDillan2 from './src/assets/font/made-dillan.woff2';
import AileronWoff from './src/assets/font/Aileron-Regular.woff';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  scroll-behavior: smooth;
  
}

body {
  background-color: #131313; /* whitesmoke */
  max-width: 100vw;
  color: #F5F5F5;
}

h1 {
  ${tw`text-xl lg:text-3xl`}
  font-family: 'poppins';
  letter-spacing: 1.2px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  ${tw`text-2xl py-1`}
  font-family: 'poppins';

}
p {
  ${tw`text-base sm:text-lg lg:text-lg`}
  font-family: 'Aileron'; 

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
  font-display: swap;
}

@font-face {
  font-family: 'Made Dillan';
  font-weight: normal;
  src: url(${MadeDillan}) format('woff'), url(${MadeDillan2}) format('woff2');
  font-display: swap;
}

@font-face {
  font-family: 'Aileron';
  font-weight: normal;
  src: url(${AileronWoff}) format('woff');
  font-display: swap;
}
`;

export default GlobalStyle