import React from 'react';
import { styled } from '@stitches/react';
import OverlayLogo from '../assets/OverlayLogo';
import { mediaQueries } from '../constants';
import DesktopButtonBar from './DesktopButtonBar';

const SectionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const LogoSectionContainer = styled('div', {
  display: 'flex',
  padding: '120px 0px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  alignSelf: 'stretch',

  [mediaQueries.tablet]: {
    padding: '80px 0px',
  },

  [mediaQueries.mobile]: {
    padding: '40px 0px',
  },
});

const StyledLogo = styled(OverlayLogo, {
  display: 'flex',
  width: '208px',
  height: '30px',
  padding: '0.677px 0.923px 0.677px 0.106px',
  justifyContent: 'center',
  alignItems: 'center',
});

const LogoText = styled('p', {
  color: '#FFFFFF',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25px',
  opacity: 0.4,
  alignSelf: 'stretch',
});

const OverlayLogoSection: React.FC = () => {
  return (
    <SectionWrapper>
      <DesktopButtonBar />
      <LogoSectionContainer>
        <StyledLogo />
        <LogoText>
          Overlay is the first of its kind exotic perpetual dex - trade anything
        </LogoText>
      </LogoSectionContainer>
    </SectionWrapper>
  );
};

export default OverlayLogoSection;