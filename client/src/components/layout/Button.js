import styled from 'styled-components';
import {
  setRem,
  setColor,
  setBorder,
  setTransition,
  setShadow,
} from './styles';

export const Button = styled.button`
  padding: ${setRem(5)};
  ${setBorder({ color: setColor.primary })};
  background: ${setColor.primary};
  display: inline-block;
  cursor: pointer;
  border-radius: ${setRem(3)};
  ${setTransition()};
  &:hover {
    background: ${setColor.primaryDark};
    border-color: ${setColor.primaryDark};
  }
`;
