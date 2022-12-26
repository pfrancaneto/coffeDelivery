import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base_text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  body::-webkit-scrollbar {
    width: 0.4rem;
  }

  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['base_button']};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['purple']};
    border-radius: 2rem;
  }
`;