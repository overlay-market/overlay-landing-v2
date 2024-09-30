import React from 'react';
import { styled } from '@stitches/react';
import { mediaQueries } from '../constants';

const ButtonBarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 20px',
  gap: '32px',
  borderRadius: '100px',
  background: 'rgba(255, 255, 255, 0.10)',
  backdropFilter: 'blur(20px)',
  marginBottom: '40px',

  [mediaQueries.tablet]: {
    display: 'none',
  },
});

const ButtonLink = styled('a', {
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '100px',
  transition: 'background-color 0.3s',
  opacity: '0.6',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: '0.9',
    color: '#FFF',
},
});

const DesktopButtonBar: React.FC = () => {
  return (
    <ButtonBarContainer>
      <ButtonLink href="https://example.com/documentation" target="_blank" rel="noopener noreferrer">
        Documentation
      </ButtonLink>
      <ButtonLink href="https://example.com/governance" target="_blank" rel="noopener noreferrer">
        Governance
      </ButtonLink>
      <ButtonLink href="https://example.com/whitepaper" target="_blank" rel="noopener noreferrer">
        White Paper
      </ButtonLink>
    </ButtonBarContainer>
  );
};

export default DesktopButtonBar;