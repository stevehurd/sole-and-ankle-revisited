import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import { QUERIES } from "../../constants";
import Icon from "../Icon/";
import VisuallyHidden from "../VisuallyHidden/";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideMobile>
          <IconButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </IconButton>
          <IconButton>
            <Icon id="search" />
            <VisuallyHidden>Open Search</VisuallyHidden>
          </IconButton>
          <IconButton onClick={() => setShowMobileMenu()}>
            <Icon id="menu" />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </IconButton>
        </SideMobile>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    border-top: 3px solid ${COLORS.gray[900]};
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const SideMobile = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 24px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 0;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
