import React from 'react';
import { styled } from '@stitches/react';

import DynamicBackgroundSVG from '../assets/background'
import CardsImage from '../assets/hero-image.png';
import { mediaQueries, LINKS } from '../constants';

const HeroContainer = styled('div', {
  '--OV-gradiant-1': 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  position: 'relative',
  width: '100vw',
  minHeight: '100vh',
  marginLeft: 'calc(-50vw + 50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  overflow: 'hidden',
  paddingTop: '80px',
});

const BackgroundWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100vw',
  height: '100%',
  zIndex: 0,
});

const StyledBackgroundSVG = styled(DynamicBackgroundSVG, {
  width: '100%',
  height: '100%',
  display: 'block',
});

const ContentWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  width: '90%',
  minHeight: '100vh',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '40px',
  maxWidth: '1120px',
  zIndex: 1,

  [mediaQueries.mobile]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Content = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '438px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '32px',

  [mediaQueries.mobile]: {
    maxWidth: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const TitleSubtitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',

  [mediaQueries.mobile]: {
    alignItems: 'center',
  },
});

const Title = styled('h1', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '64px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '80px',
  margin: 0,

  [mediaQueries.mobile]: {
    fontSize: '48px',
    lineHeight: '60px',
  },
});

const Subtitle = styled('h2', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal',
  margin: 0,

  [mediaQueries.mobile]: {
    fontSize: '24px',
  },
});

export const TradeButton = styled('button', {
  display: 'flex',
  width: '100%',
  maxWidth: '360px',
  height: '60px',
  padding: '10.5px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
  borderRadius: '12px',
  border: '1.5px solid #FFC955',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  background: 'var(--OV-gradiant-1) border-box, transparent padding-box',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
});

const CardsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [mediaQueries.mobile]: {
    width: '100%',
    maxWidth: '100%',
  },
});

const Hero: React.FC = () => {
  const handleTradeNow = () => {
    window.location.href = LINKS.trade;
  };

  return (
    <HeroContainer>
      <BackgroundWrapper>
        <StyledBackgroundSVG />
      </BackgroundWrapper>
      <ContentWrapper>
        <Content>
          <TitleSubtitleContainer>
            <Title>The Trade Everything Engine</Title>
            <Subtitle>The Exotic Perps Dex</Subtitle>
          </TitleSubtitleContainer>
          <TradeButton onClick={handleTradeNow}>Trade Now</TradeButton>
        </Content>
        <CardsContainer>
          <img src={CardsImage} alt="Trading cards" style={{ maxWidth: '100%', height: 'auto' }} />
        </CardsContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;