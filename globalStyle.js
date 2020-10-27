import { createGlobalStyle } from 'styled-components';
import Aileron from './src/assets/font/Aileron-Regular.woff';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle`

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
}

body {
    background-color: whitesmoke; /* whitesmoke */
}

html {
    color: #131313;
}

h1 {
    ${tw`text-xl lg:text-3xl`}
    font-family: 'poppins';
    letter-spacing: 1.2px;
    line-height: 1.1;
}

h2 {
    ${tw`text-2xl py-1`}
    font-family: 'poppins';

}

p {
    ${tw`text-base sm:text-lg lg:text-lg`}
    font-family: 'Aileron'; 
}

@font-face {
    font-family: 'Aileron';
    font-weight: normal;
    src: url(${Aileron}) format('woff');
    font-display: swap;
}
`;

export default GlobalStyle