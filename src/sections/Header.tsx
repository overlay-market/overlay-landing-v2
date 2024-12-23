import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@stitches/react';
import { mediaQueries, LINKS } from '../constants';
import OverlayLogo from '../assets/overlay-logo.svg';
import MenuIcon from '../assets/menu-icon.svg';

const HeaderWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,
});

const HeaderContainer = styled('header', {
  position: 'relative',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LogoContainer = styled('div', {
  display: 'flex',
  height: '40px',
  alignItems: 'center',
  flexShrink: 0,
});

const StyledLogo = styled('img', {
  width: '40px',
  height: '40px',
  flexShrink: 0,
});

const LogoText = styled('span', {
  color: '#FFFFFF',
  textAlign: 'center',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '16px',
  marginLeft: '16px',

  [mediaQueries.mobile]: {
    display: 'none',
  },
});

const MenuIconContainer = styled('div', {
  display: 'none',
  cursor: 'pointer',

  [mediaQueries.tablet]: {
    display: 'block',
  },
});

const MenuItems = styled('div', {
  display: 'none',
  flexDirection: 'column',
  position: 'absolute',
  top: '100%',
  right: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '8px',
  padding: '16px',

  [mediaQueries.tablet]: {
    display: 'flex',
  },
});

const MenuItem = styled('a', {
  color: '#FFF',
  textDecoration: 'none',
  padding: '8px 16px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFF',
  },
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <StyledLogo src={OverlayLogo} alt="Overlay Logo" />
          <LogoText>The Trade Everything Engine</LogoText>
        </LogoContainer>
        <MenuIconContainer ref={menuIconRef} onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu" width="40" height="40" />
        </MenuIconContainer>
        {isMenuOpen && (
          <MenuItems ref={menuRef}>
            <MenuItem href={LINKS.documentation} target="_blank" rel="noopener noreferrer">
              Documentation
            </MenuItem>
            <MenuItem href={LINKS.governance} target="_blank" rel="noopener noreferrer">
              Governance
            </MenuItem>
            <MenuItem href={LINKS.whitepaper} target="_blank" rel="noopener noreferrer">
              White Paper
            </MenuItem>
          </MenuItems>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;