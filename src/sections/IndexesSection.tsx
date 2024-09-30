import React from 'react';
import { styled } from '@stitches/react';
import { mediaQueries, LINKS } from '../constants';
import indexesImage from '../assets/indexes.png';
import ExternalLinkIcon from '../assets/external-link-icon.svg';

const SectionWrapper = styled('div', {
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
  width: '1842px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '32px',
  flexWrap: 'wrap',
});

const StyledImage = styled('img', {
  maxWidth: '100%',
  height: 'auto',
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

const IndexesSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>Wide world of new markets</Title>
      <ImageContainer>
        <StyledImage src={indexesImage} alt="Indexes" />
      </ImageContainer>
      <LinkButton href={LINKS.markets} target="_blank" rel="noopener noreferrer">
        <LinkText>List of markets section</LinkText>
        <LinkIcon src={ExternalLinkIcon} alt="External link" />
      </LinkButton>
    </SectionWrapper>
  );
};

export default IndexesSection;