import { css } from 'styled-components';

export const setColor = {
  primary: '#fccc65',
  primaryMuted: '#ffecc2',
  primaryDark: '#d6ae55',
  secondary: '#66e3ff',
  secondaryDark: '#57c1d8',
  success: '#5fee79',
  successDark: '#51ca67',
  danger: '#d36b54',
  dangerDark: '#a65543',
  mainWhite: '#faf9f8',
  offWhite: '#fff9ec',
  mainBlack: '#222',
  mainGrey: '#a59f94',
  darkGrey: '#413f3b',
  lightGrey: '#efedea',
  overlayBlack: 'rgba(0, 0, 0, 0.5)',
};

export const setFont = {
  main: 'font-family: Helvetica, sans-serif',
  display: 'font-family: "Source Sans Pro", san-serif',
};

export const setShadow = {
  light:
    'box-shadow:  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);',
  medium:
    'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
  large:
    'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = 'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px`;
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = 'all',
  time = '0.3s',
  timing = 'ease-in-out',
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};
