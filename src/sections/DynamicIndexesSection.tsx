import React, { useState, useEffect, useRef } from 'react';
import { styled, keyframes } from '@stitches/react';
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

const scrollAnimation = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' },
});

const RowContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  width: '100%',
});

const RowContent = styled('div', {
  display: 'flex',
  gap: 'var(--market-card-gap)',
  justifyContent: 'flex-start',
  animation: `${scrollAnimation} linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
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
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const shuffledMarkets = [...marketConfig].sort(() => Math.random() - 0.5);
    setMarkets(shuffledMarkets);
  }, []);

  useEffect(() => {
    const setRowWidth = () => {
      rowRefs.forEach((ref, index) => {
        if (ref.current) {
          const computedStyle = window.getComputedStyle(ref.current);
          const gap = parseInt(computedStyle.getPropertyValue('--market-card-gap') || '0', 10);
          
          const marketCards = ref.current.children;
          let totalWidth = 0;
          for (let i = 0; i < marketCards.length; i++) {
            totalWidth += (marketCards[i] as HTMLElement).offsetWidth;
          }
          totalWidth += (marketCards.length - 1) * gap;
          ref.current.style.width = `${totalWidth}px`;
          
          const speed = index === 0 ? 10 : index === 1 ? 6 : 12;
          ref.current.style.animationDuration = `${speed * (totalWidth / 500)}s`;
        }
      });
    };

    setRowWidth();
    window.addEventListener('resize', setRowWidth);
    return () => window.removeEventListener('resize', setRowWidth);
  }, [markets]);

  const renderMarketCard = (market: Market) => (
    <MarketCard key={market.name}>
      <MarketIcon src={market.icon} alt={market.name} />
      <MarketInfo>
        <MarketPrice up={market.up}>{market.price}</MarketPrice>
        <MarketName>{market.name}</MarketName>
      </MarketInfo>
    </MarketCard>
  );

  const renderRow = (rowNumber: number) => {
    const rowMarkets = markets.filter(market => 
      !market.row || market.row.length === 0 || market.row.includes(rowNumber)
    );
    const duplicatedMarkets = [...rowMarkets, ...rowMarkets];

    return (
      <RowContainer key={rowNumber}>
        <RowContent ref={rowRefs[rowNumber - 1]}>
          {duplicatedMarkets.map((market, index) => (
            <React.Fragment key={`${market.name}-${index}`}>
              {renderMarketCard(market)}
            </React.Fragment>
          ))}
        </RowContent>
      </RowContainer>
    );
  };

  return (
    <SectionWrapper>
      <Title>Wide world of new markets</Title>
      <MarketsContainer>
        {renderRow(1)}
        {renderRow(2)}
        {renderRow(3)}
      </MarketsContainer>      
      <LinkButton href={LINKS.markets} target="_blank" rel="noopener noreferrer">
        <LinkText>List of markets section</LinkText>
        <LinkIcon src={ExternalLinkIcon} alt="External link" />
      </LinkButton>
    </SectionWrapper>
  );
};

export default DynamicIndexesSection;