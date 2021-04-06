import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    min-height: 100%;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    font-size: 1.6rem;
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-decoration: none;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 2rem 0;
    font-weight: normal;
  }

  h1 {
    margin-bottom: 2.6rem;
  }
  hr {
    border: none;
    margin: 1.5rem 0;
    background: #ccc;
    height: 1px;
  }

  .text-center {
    text-align: center;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }

`;