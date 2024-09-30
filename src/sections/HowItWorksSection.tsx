import React from 'react';
import { styled } from '@stitches/react';
import { mediaQueries } from '../constants';

const SectionWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: '350px 1px 1fr',
  alignItems: 'stretch',
  borderTop: '1px solid #FFF',

  [mediaQueries.tablet]: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1px auto',
  },
});

const LeftColumn = styled('div', {
  display: 'flex',
  padding: '20px',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  borderBottom: '1px solid #FFF',
  height: 'fit-content',

  [mediaQueries.tablet]: {
    justifyContent: 'flex-start',
    borderBottom: '1px solid #FFF',
  },
});

const LeftColumnText = styled('div', {
  color: '#FFF',
  textAlign: 'right',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '20px',

  [mediaQueries.tablet]: {
    textAlign: 'left',
  },
});

const Divider = styled('div', {
  width: '1px',
  height: '100%',
  background: 'linear-gradient(180deg, #FFF 0%, #22221F 100%)',

  [mediaQueries.tablet]: {
    width: '100%',
    height: '1px',
    background: '#FFF',
  },
});

const RightColumn = styled('div', {
  display: 'flex',
  padding: '95px 160px 95px 95px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '48px',

  [mediaQueries.tablet]: {
    padding: '40px 20px',
  },

  [mediaQueries.mobile]: {
    padding: '30px 15px 80px 15px',
  },
});

const Frame = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '20px',

  [mediaQueries.mobile]: {
    gap: '16px',
  },
});

const IndexNumber = styled('div', {
  width: '95px',
  flexShrink: 0,
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: 200,
  lineHeight: '48px',
  opacity: 0.4,

  [mediaQueries.mobile]: {
    fontSize: '32px',
    lineHeight: '32px',
    width: '55px',
  },
});

const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  flex: '1 0 0',
});

const Title = styled('h3', {
  alignSelf: 'stretch',
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  margin: '0',
});

const Description = styled('p', {
  alignSelf: 'stretch',
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25px',
  opacity: 0.4,
  margin: '0',
});

const HowItWorksSection: React.FC = () => {
  return (
    <SectionWrapper>
      <LeftColumn>
        <LeftColumnText>How it works</LeftColumnText>
      </LeftColumn>
      <Divider />
      <RightColumn>
        <Frame>
          <IndexNumber>01.</IndexNumber>
          <TextContent>
            <Title>Connect and Choose a Market</Title>
            <Description>
              To start trading on Overlay Market, connect your cryptocurrency wallet. Once connected, choose a market to trade on, such as cryptocurrencies, stocks, or commodities. Overlay gives you access to a variety of assets, allowing for greater flexibility.
            </Description>
          </TextContent>
        </Frame>
        <Frame>
          <IndexNumber>02.</IndexNumber>
          <TextContent>
            <Title>Make a Prediction with OVL Tokens</Title>
            <Description>
              After selecting your market, you can use Overlay tokens (OVL) to predict if the price of the asset will go up (long) or down (short). OVL tokens act as your stake, and the system operates on an "up-only" perpetual system. You don't need collateral, making it easier to open positions.
            </Description>
          </TextContent>
        </Frame>
        <Frame>
          <IndexNumber>03.</IndexNumber>
          <TextContent>
            <Title>Manage and Close Your Trade</Title>
            <Description>
              Once your position is open, you can actively monitor its performance. Overlay allows you to adjust or close your position whenever you like, without relying on liquidations or margin calls. Your outcome is directly tied to the market's performance, and when you're satisfied, you can close the trade, receiving either profits or losses depending on the market's movement.
            </Description>
          </TextContent>
        </Frame>
      </RightColumn>
    </SectionWrapper>
  );
};

export default HowItWorksSection;