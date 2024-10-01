import React from 'react';
import { styled } from '@stitches/react';
import { LINKS, mediaQueries } from '../constants';
import WhitePaperImage from '../assets/white-paper.png';
import ExternalLinkIcon from '../assets/external-link-icon.svg';

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
  maxWidth: '100%',
  
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
    maxWidth: '100%',
    padding: '30px 15px 80px 15px',
  },
});

const Frame = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '48px',

  [mediaQueries.mobile]: {
    gap: '16px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CardsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '378px',
  maxWidth: '40%',
  height: 'auto',

  [mediaQueries.tablet]: {
    maxWidth: '290px',
  },

  [mediaQueries.mobile]: {
    width: '378px',
  },
});

const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '19px',
  flex: '1 0 0',
  height: '100%',
  justifyContent: 'space-between',
});

const Title = styled('h3', {
  height: '50px',
  alignSelf: 'stretch',
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 300,
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

const AuditLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  height: '22px',
  flexShrink: 0,
  color: '#12B4FF',
  textAlign: 'center',
  fontFamily: '"IBM Plex Mono", monospace',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  textDecorationLine: 'underline',
  cursor: 'pointer',
});

const LinkIcon = styled('img', {
  width: '20px',
  height: '20px',
});

const WhitePaperSection: React.FC = () => {
  return (
    <SectionWrapper>
      <LeftColumn>
        <LeftColumnText>White Paper</LeftColumnText>
      </LeftColumn>
      <Divider />
      <RightColumn>
        <Frame>
          <CardsContainer>
            <img src={WhitePaperImage} alt="white paper image" style={{ maxWidth: '100%', height: 'auto' }} />
          </CardsContainer>
          <TextContent>
            <Title>White Paper</Title>
            <Description>
              Overlay Market, the white paper would provide an in-depth explanation of how the platform operates, detailing its decentralized prediction market model, the role of OVL tokens, and the unique “up-only” perpetual trading mechanism. It typically includes technical details, economic models, and strategic goals to help users, investors, and developers understand the core features and long-term vision of the platform.
            </Description>
            <AuditLink href={LINKS.whitepaper} target="_blank" rel="noopener noreferrer">
              Read White Paper
              <LinkIcon src={ExternalLinkIcon} alt="External link" />
            </AuditLink>
          </TextContent>
        </Frame>
      </RightColumn>
    </SectionWrapper>
  );
};

export default WhitePaperSection;