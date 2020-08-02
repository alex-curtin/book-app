import { createGlobalStyle } from 'styled-components';
import { setColor, setFont } from './styles';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${setFont.main};
    color: ${setColor.mainBlack};
    background: ${setColor.offWhite};
    font-size:100%;
  }

  h1 {
    font-size: 2.5em;
    ${setFont.display};
    font-weight: 500;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 0.5rem;
    ${setFont.display};
  }
  
  h3 {
    font-size: 1.5em;
    margin-bottom: 0.5rem;
    color: ${setColor.darkGrey};
    ${setFont.display};
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
