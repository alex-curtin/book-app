import styled from 'styled-components';
import { setRem, setColor, setFlex } from './styles';

export const AuthPage = styled.section`
  margin: 0 auto;
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
