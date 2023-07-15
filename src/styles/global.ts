import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme["gray-900"]};
    font-family: 'Titillium Web', sans-serif;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
  }
`;