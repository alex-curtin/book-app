import styled from 'styled-components';
import { setRem, setColor } from './styles';

export const Form = styled.form`
  input,
  textarea {
    display: block;
    margin-bottom: ${setRem(10)};
    padding: ${setRem(5)};
    width: ${setRem(300)};
  }
`;
