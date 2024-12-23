import React from 'react';
import { styled } from '@stitches/react';
import { mediaQueries, LINKS, BREAKPOINTS } from '../constants';
import governanceImage from '../assets/governance-desktop.png';
import governanceTabletImage from '../assets/governance-tablet.png';
import governanceMobileImage from '../assets/governance-mobile.png';

const SectionWrapper = styled('div', {
  '--OV-gradiant-1': 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  display: 'flex',
  padding: '120px 40px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  alignSelf: 'stretch',
  borderTop: '1px solid #FFF',

  [mediaQueries.tablet]: {
    padding: '80px 40px',
  },

  [mediaQueries.mobile]: {
    padding: '80px 20px',
  },
});

const Title = styled('h2', {
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
  alignSelf: 'stretch',
});

const ImageContainer = styled('div', {
  display: 'flex',
  width: 'auto',
  maxWidth: '1120px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '32px',
  flexWrap: 'wrap',
  cursor: 'pointer',

  [mediaQueries.tablet]: {
    maxWidth: '728px',
  },

  [mediaQueries.mobile]: {
    maxWidth: '265px',
  },
});

const StyledImage = styled('img', {
  maxWidth: '100%',
  height: 'auto',
});

const GovernanceSection: React.FC = () => {
  const handleGov = () => {
    window.open(
      LINKS.trade,
      '_blank'
    )
  };

  return (
    <SectionWrapper>
      <Title>Governance</Title>
      <ImageContainer>
        <picture onClick={handleGov}>
          <source media={`(max-width: ${BREAKPOINTS.mobile}px)`} srcSet={governanceMobileImage} />
          <source media={`(max-width: ${BREAKPOINTS.tablet}px)`} srcSet={governanceTabletImage} />
          <StyledImage src={governanceImage} alt="Governance" />
        </picture>
      </ImageContainer>
    </SectionWrapper>
  );
};

export default GovernanceSection;