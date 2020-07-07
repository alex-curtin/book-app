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
  secondary: {
    main: setColor.secondary,
    dark: setColor.secondaryDark,
  },
  danger: {
    main: setColor.danger,
    dark: setColor.dangerDark,
  },
  success: {
    main: setColor.success,
    dark: setColor.success,
  },
};

export const Button = styled.button`
  padding: ${setRem(5)};
  ${setBorder()};
  border-color: ${(props) => themes[props.theme].main};
  background: ${(props) => themes[props.theme].main};
  display: inline-block;
  cursor: pointer;
  border-radius: ${setRem(3)};
  ${setTransition()};

  &:hover {
    background: ${(props) => themes[props.theme].dark};
    border-color: ${(props) => themes[props.theme].dark};
  }
`;

Button.defaultProps = {
  theme: 'primary',
};
