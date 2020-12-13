import { createGlobalStyle } from 'styled-components';
import Aileron from './src/assets/font/Aileron-Regular.woff';

const GlobalStyle = createGlobalStyle`

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
}

body {
    background-color: whitesmoke;
}

html {
    color: #131313;
}

a {
    text-decoration: none;
    color: inherit;
}

h1 {
    font-size: 1.25rem;
    font-family: 'poppins';
    letter-spacing: 1.2px;
    line-height: 1.1;

    @media (min-width: 1024px) {
        font-size: 1.875rem;
    }
}

h2 {
    padding: 0.25rem;
    font-size: 1.5rem;
    font-family: 'poppins';

}

p {
    font-size: 1rem;
    font-family: 'Aileron'; 

    @media (min-width: 640px) {
        font-size: 1.125rem;
    }
}

@font-face {
    font-family: 'Aileron';
    font-weight: normal;
    src: url(${Aileron}) format('woff');
    font-display: swap;
}
`;

export default GlobalStyle