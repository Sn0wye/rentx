import { styled } from '../../stitches.config';

export const HomeWrapper = styled('div', {
  height: '100vh',
  background: '$black',
  display: 'flex',
  justifyContent: 'space-around',
});

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
});

export const HomeLogo = styled('div', {
  marginBottom: '7.5rem',
});

export const HomeTitle = styled('h1', {
  fontFamily: '$archivo',
  fontWeight: '600',
  fontSize: '3.375rem',
  lineHeight: '3.375rem',
  color: '$white',
  maxWidth: '26.625rem',
  marginBottom: '2rem',
});

export const HomeText = styled('p', {
  fontFamily: '$inter',
  fontSize: '1.25rem',
  lineHeight: '1.875rem',
  maxWidth: '20rem',
  color: '$white',
  marginBottom: '4rem',
});

export const HomeAside = styled('aside', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '600px',
});
