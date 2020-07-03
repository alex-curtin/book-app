import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from './styles';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${setFont.main};
    color: ${setColor.mainBlack};
    background: ${setColor.lightGrey};
    font-size:100%;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }

  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }

  h4 {
    font-size: 1.2em;
    line-height: 1.2;
    margin-bottom: 1.25em;
    font-weight: bold;
  }

  h5 {
    font-size: 1em;
    margin-bottom: 1.5em;
    font-weight: bold;
  }

  h6 {
    font-size: 1em;
    font-weight: bold;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
`;

export default GlobalStyles;
