import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        max-width: 1440px;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']}
    }

    body {
        background: ${props => props.theme['background']};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font: 400 1rem Roboto, sans-serif;
    }
`;