import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #f2f2f2;
        font-family: 'Roboto', sans-serif;
    }

    body {
        padding: 2rem;
        background: #2f2f2f;
        width: 100vw;
        height: 100vh;
    }

    html, body, body > div:first-child, div#__next, div#__next > div, main {
        height: 100%;
    }
`;
