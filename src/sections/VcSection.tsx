import React from "react";
import { styled } from "@stitches/react";
import { LINKS, mediaQueries } from "../constants";
import OverlayLogo from '../assets/OverlayLogo';
import { TradeButton } from './Hero';
import PolychainLogo from '../assets/polychain-logo.png';
import onekxLogo from '../assets/onekx-logo.png';
import parafiLogo from '../assets/parafi-logo.png';

const vcLogoData = [
  {
    logo: PolychainLogo,
    url: 'https://jobs.polychain.capital/companies/overlay-2-10921965-ae1e-43be-b3b9-eb92ec801b56',
    width: '176px',
  },
  {
    logo: onekxLogo,
    url: 'https://careers.1kx.capital/companies/overlay-2-10921965-ae1e-43be-b3b9-eb92ec801b56',
    width: '88px',
  },
  {
    logo: parafiLogo,
    url: 'https://parafi.com/portfolio',
    width: '138px',
  },
  // Add more logos as needed
];

const vcTextData: { text: string, fontSize: string, url?: string}[] = [
  {
    text: 'The LAO',
    // url: 'https://example1.com',
    fontSize: '24px',
  },
  {
    text: 'CitizenX',
    fontSize: '22px',
  },
  {
    text: 'MetaCartel',
    fontSize: '22px',
  },
  {
    text: 'FoundersHead',
    fontSize: '22px',
  },
  {
    text: 'and others',
    fontSize: '22px',
  },
  // Add more text cards as needed
];

const SectionWrapper = styled("div", {
  '--OV-gradiant-1': 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  display: "grid",
  gridTemplateColumns: "2fr 1px 1fr",
  alignItems: "stretch",
  borderTop: "1px solid #FFF",
  position: "relative",

  [mediaQueries.tablet]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1px auto",
  },
});

const RightColumn = styled("div", {
  display: "flex",
  padding: "20px 80px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderBottom: "1px solid #FFF",
  height: "fit-content",

  [mediaQueries.mobile]: {
    justifyContent: "flex-start",
    padding: "20px 40px",
    borderBottom: "1px solid #FFF",
  },
});

const RightColumnText = styled("div", {
  color: "#FFF",
  textAlign: "left",
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  maxWidth: "100%",

  [mediaQueries.mobile]: {
    textAlign: "left",
  },
});

const Divider = styled("div", {
  width: "1px",
  height: "100%",
  background: "linear-gradient(180deg, #FFF 0%, #22221F 100%)",

  [mediaQueries.tablet]: {
    width: "100%",
    height: "1px",
    background: "#FFF",
  },
});

const LeftColumn = styled("div", {
  display: "flex",
  padding: "160px 115px 160px 160px",
  flexDirection: "column",
  alignItems: "center",
  gap: "35px",
  flexWrap: 'wrap',
  alignContent: 'center',
  position: "relative",

  [mediaQueries.tablet]: {
    padding: "80px",
  },

  [mediaQueries.mobile]: {
    maxWidth: "100%",
    padding: "40px 15px 80px 15px",
  },
});

const CardBox = styled('div', {
  display: 'flex',
  maxWidth: '645px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
});

const TopCard = styled('div', {
  display: 'flex',
  padding: '48px 32px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
  borderRadius: '24px 24px 0px 0px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  background: 'linear-gradient(116deg, rgba(37, 37, 74, 0.30) 8.22%, rgba(89, 89, 200, 0.19) 54.99%, rgba(90, 90, 255, 0.09) 100.83%)',
});

const StyledLogo = styled(OverlayLogo, {
  display: 'flex',
  width: '208px',
  height: '30px',
  padding: '0.677px 0.923px 0.677px 0.106px',
  justifyContent: 'center',
  alignItems: 'center',

  [mediaQueries.mobile]: {
    width: '156px',
    height: '22.5px',
  },
});

const TopCardText = styled('div', {
  fontFamily: 'Inter',
  fontSize: '42px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  background: 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const BottomSection = styled('div', {
  display: 'flex',
  alignSelf: 'stretch',
});

const BottomLeftCard = styled('div', {
  display: 'flex',
  padding: '24px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  flex: '1 0 0',
  borderRadius: '0px 0px 0px 24px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  background: 'linear-gradient(116deg, rgba(37, 37, 74, 0.80) 8.22%, rgba(89, 89, 200, 0.52) 54.99%, rgba(90, 90, 255, 0.24) 100.83%)',
});

const BottomRightCard = styled('div', {
  display: 'flex',
  padding: '24px 32px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  borderRadius: '0px 0px 72px 0px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  background: 'linear-gradient(116deg, rgba(37, 37, 74, 0.30) 8.22%, rgba(89, 89, 200, 0.19) 54.99%, rgba(90, 90, 255, 0.09) 100.83%)',
});

const BottomCardText = styled('div', {
  alignSelf: 'stretch',
  maxWidth: '176px',
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '25.6px',
});

const HighlightedText = styled('span', {
  background: 'linear-gradient(90deg, #FFC955 0%, #FF7CD5 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const BoldLinkText = styled('a', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  textDecoration: 'none',
});

const BackgroundSVG = styled('svg', {
  width: '980px',
  height: '469px',
  position: 'absolute',
  left: '-50px',
  top: '0px',
  zIndex: -1,

  [mediaQueries.tablet]: {
    left: '-50px',
    top: '0px',
  },

  [mediaQueries.mobile]: {
    left: '0px',
    top: '0px',
    flexShrink: 0,
  },
});

const SectionContainer = styled('div', {
  display: 'flex',
  padding: '48px 160px 48px 80px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '21px',
  alignSelf: 'stretch',

  [mediaQueries.tablet]: {
    padding: '48px 80px',
    alignItems: 'center',
  }

});

const LogoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '21px',
  alignSelf: 'stretch',

  [mediaQueries.tablet]: {
    flexDirection: 'row',
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const LogoLink = styled('a', {
  display: 'flex',
  width: '200px',
  height: '70px',
  padding: '20px 40px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.10)',
  background: 'linear-gradient(116deg, rgba(57, 57, 57, 0.30) 8.22%, rgba(48, 48, 103, 0.19) 54.99%, rgba(57, 57, 57, 0.09) 100.83%)',
});

const TextLink = styled('a', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 200,
  lineHeight: 'normal',
});

const TextNoLink = styled('div', {
  color: '#FFF',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 200,
  lineHeight: 'normal',
});

const VcSection: React.FC = () => {
  const handleTradeNow = () => {
    window.location.href = LINKS.trade;
  };

  return (
    <SectionWrapper>
      <LeftColumn>
        <CardBox>
          <TopCard>
            <StyledLogo />
            <TopCardText>The Trade Everything Engine</TopCardText>
          </TopCard>
          <BottomSection>
            <BottomLeftCard>
              <BottomCardText>
                The perpetuals DEX for <HighlightedText>exotic</HighlightedText>{" "}
                assets.
              </BottomCardText>
              <BottomCardText>
                Never before seen markets you can’t get anywhere else.
              </BottomCardText>
            </BottomLeftCard>
            <BottomRightCard>
              <BottomCardText>
                Only possible through Overlay’s novel token dynamics and risk
                framework.
              </BottomCardText>
              <BoldLinkText href={LINKS.whitepaper}>
                White Paper-&gt;
              </BoldLinkText>
            </BottomRightCard>
          </BottomSection>
        </CardBox>
        <TradeButton onClick={handleTradeNow}>Launch App</TradeButton>
        <BackgroundSVG xmlns="http://www.w3.org/2000/svg" width="987" height="757" viewBox="0 0 987 757" fill="none">
          <g filter="url(#filter0_f_1267_636)">
            <path d="M842.5 292.334C861.297 135.233 345.751 133.363 85.6278 152.065C-281.31 168.541 -156.332 542.145 182.612 602.705C486.059 656.923 819.004 488.709 842.5 292.334Z" fill="#FF3939" fill-opacity="0.2"/>
          </g>
          <defs>
            <filter id="filter0_f_1267_636" x="-281" y="0" width="1268" height="757" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_1267_636"/>
            </filter>
          </defs>
        </BackgroundSVG>
      </LeftColumn>
      <Divider />
      <div>
      <RightColumn>
        <RightColumnText>Backed by the best</RightColumnText>
      </RightColumn>
        <SectionContainer>
          <LogoContainer>
            {vcLogoData.map((logoItem, index) => (
              <LogoLink key={index}>
                <img style={{width: logoItem.width}} src={logoItem.logo} alt="Logo" />
              </LogoLink>
            ))}
          </LogoContainer>
          {vcTextData.map((textCard, index) => {
            return textCard.url ?
            <TextLink key={index} href={textCard.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: textCard.fontSize }}>
              {textCard.text}
            </TextLink>
            :
            <TextNoLink key={index} style={{ fontSize: textCard.fontSize }}>
              {textCard.text}
            </TextNoLink>
          })}
        </SectionContainer>
        </div>
    </SectionWrapper>
  );
};

export default VcSection;
