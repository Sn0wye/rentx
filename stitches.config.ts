import { createStitches } from '@stitches/react';
export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      inter: 'Inter',
      archivo: 'Archivo',
    },
    colors: {
      brand: '#8257e6',
      brandHover: '#8284fa',
      green: '#03B252',
      greenHover: '#038A3F',
      black: '#1B1B1F',
      blackShapes: '#29292E',
      white: '#FFFFFF',
      titles: '#47474D',
      text: '#7A7A80',
      textDetais: '#AEAEB3',
      grayBlack: '#DEDEE3',
      graySecondary: '#EBEBF0',
      grayPrimary: '#F4F5F6',
    },
    transitions: {
      transition: 'all 400ms ease-in-out',
    },
    media: {
      mobile: '(max-width: 640px)',
      tablet: '(max-width: 1024px',
    },
  },
});
