import { styled } from '../../stitches.config';

export const Button = styled('button', {
  color: '$white',
  padding: '2rem 5rem',
  borderRadius: '0.5rem',
  transition: '$transition',
  border: 'none',
  cursor: 'pointer',
  fontFamily: '$inter',
  fontSize: '1.125rem',

  variants: {
    color: {
      primary: {
        background: '$brand',
        '&:hover': {
          background: '$brandHover',
        },
      },
      green: {
        background: '$green',
        '&:hover': {
          background: '$greenHover',
        },
      },
    },
  },
});
