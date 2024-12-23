import React from 'react';
import { styled } from '@stitches/react';
import { LINKS, mediaQueries } from '../constants';
import ExternalLinkIcon from '../assets/external-link-icon.svg';
import SpearbitAuditImage from '../assets/spearbit-audit.png';
import LeastAuthorityAuditImage from '../assets/la-audit.png';
import TrailOfBitsAuditImage from '../assets/tob-audit.png';

const SectionWrapper = styled('div', {
  display: 'flex',
  padding: '160px 0px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '80px',
  alignSelf: 'stretch',

  [mediaQueries.tablet]: {
    padding: '120px 40px',
  },

  [mediaQueries.mobile]: {
    padding: '80px 20px',
  },
});

const Title = styled('h2', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  color: '#FFF',
  textAlign: 'center',
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

const AuditSectionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  maxWidth: '850px',

  [mediaQueries.tablet]: {
    gap: '60px',
  },

  [mediaQueries.mobile]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
});

const AuditSection = styled('div', {
  display: 'flex',
  width: '200px',
  height: '138px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '26px',
});

const AuditImage = styled('img', {
  gap: '10px',
  flex: '1 0 0',
  height: '90px',
});

const AuditLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  width: '200px',
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

const AuditsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Title>Backed up by the most formidable</Title>
      <AuditSectionsContainer>
        <AuditSection>
          <AuditImage src={SpearbitAuditImage} alt="Spearbit Audit" />
          <AuditLink href={LINKS.spearbitAudit} target="_blank" rel="noopener noreferrer">
            Spearbit Dao Audit
            <LinkIcon src={ExternalLinkIcon} alt="External link" />
          </AuditLink>
        </AuditSection>
        <AuditSection>
          <AuditImage src={LeastAuthorityAuditImage} alt="Least Authority Audit" />
          <AuditLink href={LINKS.leastAuthorityAudit} target="_blank" rel="noopener noreferrer">
            Least Authority Audit
            <LinkIcon src={ExternalLinkIcon} alt="External link" />
          </AuditLink>
        </AuditSection>
        <AuditSection>
          <AuditImage src={TrailOfBitsAuditImage} alt="Trail of Bits Audit" />
          <AuditLink href={LINKS.trailOfBitsAudit} target="_blank" rel="noopener noreferrer">
            Trail of Bits Audit
            <LinkIcon src={ExternalLinkIcon} alt="External link" />
          </AuditLink>
        </AuditSection>
      </AuditSectionsContainer>
    </SectionWrapper>
  );
};

export default AuditsSection;