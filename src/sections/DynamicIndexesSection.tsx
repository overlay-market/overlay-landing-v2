import React, { useState, useEffect } from 'react';
import { styled } from '@stitches/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { marketConfig, Market } from '../config/marketConfig';
import { LINKS, mediaQueries } from '../constants';
import ExternalLinkIcon from '../assets/external-link-icon.svg';

const SectionWrapper = styled('div', {
  '--market-card-gap': '32px',
  display: 'flex',
  padding: '120px 0',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  alignSelf: 'stretch',
  borderTop: '1px solid #FFF',
  overflow: 'hidden',

  [mediaQueries.tablet]: {
    padding: '80px 0',
  },

  [mediaQueries.mobile]: {
    padding: '80px 0',
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
  padding: '0 20px',
  margin: 0,
});

const MarketsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: 'var(--market-card-gap)',
});

const SliderContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  '& .slick-track': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .slick-slide': {
    height: 'auto',
  },
});

const MarketCardWrapper = styled('div', {
  padding: '0 16px',
});

const MarketCard = styled('div', {
  display: 'flex',
  padding: '10px 32px 10px 10px',
  alignItems: 'center',
  gap: '16px',
  borderRadius: '200px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  background: '#393939',
  flexShrink: 0,
});

const MarketIcon = styled('img', {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
});

const MarketInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

const MarketPrice = styled('span', {
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  variants: {
    up: {
      true: { color: '#1FFF9C' },
      false: { color: '#FF5A5A' },
    },
  },
});

const MarketName = styled('span', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',
});

const LinkButton = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  textDecoration: 'none',
});

const LinkText = styled('span', {
  color: '#12B4FF',
  textAlign: 'center',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});

const LinkIcon = styled('img', {
  width: '20px',
  height: '20px',
});

const DynamicIndexesSection: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    const shuffledMarkets = [...marketConfig].sort(() => Math.random() - 0.5);
    setMarkets(shuffledMarkets);
  }, []);

  const renderMarketCard = (market: Market) => (
    <MarketCardWrapper>
      <MarketCard>
        <MarketIcon src={market.icon} alt={market.name} />
        <MarketInfo>
          <MarketPrice up={market.up}>{market.price}</MarketPrice>
          <MarketName>{market.name}</MarketName>
        </MarketInfo>
      </MarketCard>
    </MarketCardWrapper>
  );

  const sliderSettings = (speed: number) => ({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: speed,
    autoplaySpeed: 0,
    pauseOnHover: false,
    variableWidth: true,
    arrows: false,
    cssEase: "linear"
  });

  const renderRow = (rowNumber: number, speed: number) => {
    const rowMarkets = markets.filter(market => 
      !market.row || market.row.length === 0 || market.row.includes(rowNumber)
    );

    return (
      <SliderContainer key={rowNumber}>
        <Slider {...sliderSettings(speed)}>
          {rowMarkets.map((market, index) => (
            <React.Fragment key={`${market.name}-${index}`}>
              {renderMarketCard(market)}
            </React.Fragment>
          ))}
        </Slider>
      </SliderContainer>
    );
  };

  return (
    <SectionWrapper>
      <Title>Wide world of new markets</Title>
      <MarketsContainer>
        {renderRow(1, 6500)}
        {renderRow(2, 3000)}
        {renderRow(3, 7500)}
      </MarketsContainer>      
      <LinkButton href={LINKS.markets} target="_blank" rel="noopener noreferrer">
        <LinkText>List of markets section</LinkText>
        <LinkIcon src={ExternalLinkIcon} alt="External link" />
      </LinkButton>
    </SectionWrapper>
  );
};

export default DynamicIndexesSection;