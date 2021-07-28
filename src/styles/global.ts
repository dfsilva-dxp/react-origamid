import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
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
    background: #f2f3f5;
    color: #000;
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

  /* CLASSES GERAIS */
  .container {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1160px
    }
  }

  /* ANIMATION */

  .fadeLeft {
    opacity: 0;
    transform: translateX(-40px);
    animation: fadeLeft 0.3s forwards;
  }

  @keyframes fadeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: #f2f3f5 !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #fd6699 !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fd6699 !important;
  }
`;
