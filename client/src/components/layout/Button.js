import styled, { css } from 'styled-components';
import {
  setRem,
  setColor,
  setBorder,
  setTransition,
  setShadow,
} from './styles';

const themes = {
  primary: {
    main: setColor.primary,
    dark: setColor.primaryDark,
  },
  danger: {
    main: setColor.danger,
    dark: setColor.dangerDark,
  },
};

export const Button = styled.button`
  padding: ${setRem(5)};
  ${setBorder()};
  border-color: ${(props) => themes[props.type].main};
  background: ${(props) => themes[props.type].main};
  display: inline-block;
  cursor: pointer;
  border-radius: ${setRem(3)};
  ${setTransition()};

  &:hover {
    background: ${(props) => themes[props.type].dark};
    border-color: ${(props) => themes[props.type].dark};
  }
`;

Button.defaultProps = {
  type: 'primary',
};
