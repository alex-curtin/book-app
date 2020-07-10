import styled from 'styled-components';
import { setRem, setColor, setFlex } from './styles';

export const AuthPage = styled.section`
  width: 90vw;
  margin: ${setRem()} auto;
  ${setFlex};
  flex-direction: column;
  input,
  textarea {
    display: block;
    margin-bottom: ${setRem(10)};
    padding: ${setRem(5)};
    width: ${setRem(300)};
  }
  a {
    color: ${setColor.secondaryDark};
  }
`;
