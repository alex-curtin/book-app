import styled from 'styled-components';
import { setRem, setColor, setBorder, setTransition } from './styles';

const themes = {
  primary: `background: ${setColor.primary}; border-color: ${setColor.primary};
   &:hover {background: ${setColor.primaryDark}; border-color: ${setColor.primaryDark};}`,
  secondary: `background: ${setColor.secondary}; border-color: ${setColor.secondary};
   &:hover {background: ${setColor.secondaryDark}; border-color: ${setColor.secondaryDark};}`,
  danger: `background: ${setColor.danger}; border-color: ${setColor.danger};
   &:hover {background: ${setColor.dangerDark}; border-color: ${setColor.dangerDark};}`,
  success: `background: ${setColor.success}; border-color: ${setColor.success};
   &:hover {background: ${setColor.successDark}; border-color: ${setColor.successDark};}`,
  neutral: `background: ${setColor.offWhite}; border-color: ${setColor.darkGrey}; color: ${setColor.darkGrey};
   &:hover {background: ${setColor.lightGrey};}`,
};

export const Button = styled.button`
  padding: ${setRem(5)};
  ${setBorder()};
  display: inline-block;
  cursor: pointer;
  border-radius: ${setRem(3)};
  ${setTransition()};
  ${(props) => themes[props.theme]};
`;

export const SmallButton = styled(Button)`
  font-size: ${setRem(12)};
  padding: ${setRem(4)};
`;

Button.defaultProps = {
  theme: 'primary',
};
