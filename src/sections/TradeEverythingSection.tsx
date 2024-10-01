import React from 'react';
import { styled } from '@stitches/react';
import { TradeButton } from './Hero';
import { LINKS, mediaQueries } from '../constants';

const SectionWrapper = styled('div', {
  '--OV-gradiant-1': 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  display: 'flex',
  padding: '64px 160px',
  alignItems: 'center',
  gap: '32px',
  alignSelf: 'stretch',
  background: 'linear-gradient(90deg, rgba(255, 201, 85, 0.20) 0%, rgba(255, 124, 213, 0.20) 100%)',
  position: 'relative',
  overflow: 'hidden',

  [mediaQueries.tablet]: {
    padding: '64px 40px',
  },

  [mediaQueries.mobile]: {
    padding: '64px 20px',
    flexDirection: 'column',
  },
});

const BackgroundSVG = styled('svg', {
  width: '752px',
  height: '352px',
  position: 'absolute',
  left: '111px',
  bottom: '-112px',
  opacity: 0.7,
  filter: 'blur(150px)',
});

const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  flex: '1 0 0',
});

const Title = styled('h2', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  margin: 0,
});

const Subtitle = styled('p', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25px',
  opacity: 0.4,
  margin: 0,
});

const TradeEverythingSection: React.FC = () => {
  return (
    <SectionWrapper>
      <BackgroundSVG xmlns="http://www.w3.org/2000/svg" width="768" height="217" viewBox="0 0 768 217" fill="none">
        <g opacity="0.7" filter="url(#filter0_f_798_5922)">
          <path d="M747.949 135.4C747.949 229.51 949.976 317 818.604 317C687.233 317 111 229.51 111 135.4C111 41.2908 217.498 -35 348.87 -35C480.241 -35 747.949 41.2908 747.949 135.4Z" fill="url(#paint0_linear_798_5922)"/>
        </g>
        <defs>
          <filter id="filter0_f_798_5922" x="-189" y="-335" width="1352" height="952" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_798_5922"/>
          </filter>
          <linearGradient id="paint0_linear_798_5922" x1="429.475" y1="-35" x2="429.475" y2="485.892" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB077"/>
            <stop offset="1" stopColor="#EF001D"/>
          </linearGradient>
        </defs>
      </BackgroundSVG>
      <TextContent>
        <Title>Trade everything</Title>
        <Subtitle>Overlay is the first of its kind exotic perpetual dex - trade anything</Subtitle>
      </TextContent>
      <TradeButton onClick={() => window.location.href = LINKS.trade}>Trade Now</TradeButton>
    </SectionWrapper>
  );
};

export default TradeEverythingSection;