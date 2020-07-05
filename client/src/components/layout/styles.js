import { css } from 'styled-components';

export const setColor = {
  primary: '#FFD166',
  primaryMuted: '#FFE7AD',
  primaryDark: '#F5AB00',
  secondary: '#32BDEC',
  secondaryDark: '#118AB2',
  success: '#06D6A0',
  danger: '#E94F37',
  dangerDark: '#CA2E16',
  mainWhite: '#fff',
  offWhite: '#FFF9EB',
  mainBlack: '#222',
  mainGrey: '#C7D1D1',
  darkGrey: '#586A6A',
  lightGrey: '#f4f6f6',
};

export const setFont = {
  main: 'font-family: Helvetica, sans-serif',
  display: 'font-family: Helvetica, san-serif',
};

export const setShadow = {
  light: 'box-shadow: 3px 7px 17px -6px rgba(0,0,0,0.89);',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);',
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
    @media (min-width: ${sizes[label] / 16}em) {
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
