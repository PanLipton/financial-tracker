import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  nav {
    background-color: #007bff;
    padding: 1rem;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline;
    margin-right: 20px;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  main {
    padding: 20px;
  }
`;

export default GlobalStyles;
