import styled from 'styled-components';
import { setRem, setColor, setBorder } from './styles';

export const Button = styled.button`
  padding: ${setRem(5)};
  ${setBorder()};
  display: inline-block;
`;
