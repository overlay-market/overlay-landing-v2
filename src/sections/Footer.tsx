import React from 'react';
import { styled } from '@stitches/react';
import OverlayLogo from '../assets/OverlayLogo';
import { LINKS, mediaQueries } from '../constants';

const footerConfig = [
  {
    title: 'Protocol',
    links: [
      { label: 'Github', url: LINKS.github },
      { label: 'Documentation', url: LINKS.documentation },
      { label: 'Governance', url: LINKS.governance },
      { label: 'White Paper V1', url: LINKS.whitepaper },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Discord', url: LINKS.discord },
      { label: 'Twitter', url: LINKS.twitter },
      { label: 'Telegram', url: LINKS.telegram },
      { label: 'Mirror', url: LINKS.mirror },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', url: LINKS.termsOfService },
    ],
  },
];

const FooterWrapper = styled('footer', {
  display: 'flex',
  padding: '55px 170px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderTop: '1px solid #FFF',
  background: '#232323',

  [mediaQueries.tablet]: {
    padding: '55px 40px',
  },

  [mediaQueries.mobile]: {
    padding: '55px 20px',
  },
});

const FooterContainer = styled('div', {
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  flexDirection: 'column',
});

const TopRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '40px',

  [mediaQueries.tablet]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
});

const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const LinksContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flex: 1,
  maxWidth: '600px',
  width: '100%',

  [mediaQueries.mobile]: {
    flexDirection: 'column',
    gap: '40px',
  },
});

const LinkColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ColumnTitle = styled('h3', {
  paddingBottom: '6px',
  color: '#FFF',
  fontFamily: '"Be Vietnam Pro", sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '10px',
});

const LinkList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const LinkItem = styled('li', {
  padding: '10px 0',
});

const StyledLink = styled('a', {
  color: '#636363',
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 400,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Divider = styled('div', {
  width: '100%',
  height: '1px',
  background: '#636363',
  margin: '20px 0',
});

const Copyright = styled('p', {
  color: '#636363',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '20px',
});

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopRow>
          <LogoContainer>
            <OverlayLogo />
          </LogoContainer>
          <LinksContainer>
            {footerConfig.map((column) => (
              <LinkColumn key={column.title}>
                <ColumnTitle>{column.title}</ColumnTitle>
                <LinkList>
                  {column.links.map((link) => (
                    <LinkItem key={link.label}>
                      <StyledLink href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </StyledLink>
                    </LinkItem>
                  ))}
                </LinkList>
              </LinkColumn>
            ))}
          </LinksContainer>
        </TopRow>
        <Divider />
        <Copyright>Copyright 2024 © Overlay Foundation, All Rights Reserved</Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;