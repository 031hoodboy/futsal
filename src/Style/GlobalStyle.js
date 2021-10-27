import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        line-height: 1.15;
    }
    input {
        all: unset;
    }
    a{
        text-decoration: none;
    }
    button {
        border: none;
        background-color: transparent;
    }
`;

export default GlobalStyles;
