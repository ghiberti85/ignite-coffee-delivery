import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme['background']};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font: 400 1rem Roboto, sans-serif;
    }

    button {
        border: none;
        cursor: pointer;
    }
`;