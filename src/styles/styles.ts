import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: '#EEEEEE',
  black: '#111111',
  gray: '#333333',
  green: '#10AC84',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;
