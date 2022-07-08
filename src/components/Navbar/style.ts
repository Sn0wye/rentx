import { styled } from '../../../stitches.config';

export const NavbarContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '5rem',
  background: '$black',
});

export const NavbarLogoContainer = styled('div', {
  display: 'grid',
  placeItens: 'center',
  width: '100%',
  height: '5rem',
  cursor: 'pointer',
});

export const NavbarItems = styled('ul', {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavbarItem = styled('li', {
  display: 'grid',
  placeItems: 'center',
  height: '3.5rem',
  width: '100%',
  cursor: 'pointer',
  color: '$textDetais',
  position: 'relative',
  transition: '$transition',
  '&:hover': {
    color: '$white',
    background: '#000',
    '&:before': {
      content: '',
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'block',
      width: '3px',
      height: '56px',
      background: '$brand',
    },
  },
  variants: {
    selected: {
      true: {
        color: '$white',
        background: '#000',
        '&:before': {
          content: '',
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'block',
          width: '3px',
          height: '56px',
          background: '$brand',
        },
      },
    },
  },
});
