import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    transition: all 0.1s ease;
  }

  html { 
    @media (max-width:1080px) {
      font-size: 93.75%
    }
    @media (max-width:1080px) {
      font-size: 87.5%
    }
  }

  body { 
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  strong {
    font-weight: 600;
    font-family: 'Barlow Condensed', sans-serif;
  }
  strong {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul, ol {
    list-style: none
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shape} !important;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.green} !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.green} !important;
  }
`;
