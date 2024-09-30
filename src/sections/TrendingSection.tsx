import React from 'react';
import { styled } from '@stitches/react';
import { mediaQueries, LINKS, BREAKPOINTS } from '../constants';
import trendingImage from '../assets/trending.png';
import trendingMobileImage from '../assets/trending-mobile.png';
import { TradeButton } from './Hero';

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
  width: '1690px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '32px',
  flexWrap: 'wrap',

  [mediaQueries.mobile]: {
    width: '100%',
  },
});

const StyledImage = styled('img', {
  maxWidth: '100%',
  height: 'auto',
});

const TrendingSection: React.FC = () => {
  const handleTradeNow = () => {
    window.location.href = LINKS.trade;
  };

  return (
    <SectionWrapper>
      <Title>Trending Markets</Title>
      <ImageContainer>
        <picture>
          <source media={`(max-width: ${BREAKPOINTS.mobile}px)`} srcSet={trendingMobileImage} />
          <StyledImage src={trendingImage} alt="Trending" />
        </picture>
      </ImageContainer>
      <TradeButton onClick={handleTradeNow}>Trade Now</TradeButton>
    </SectionWrapper>
  );
};

export default TrendingSection;