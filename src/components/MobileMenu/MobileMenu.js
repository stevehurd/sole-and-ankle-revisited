/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
          </UnstyledButton>
        </ButtonWrapper>
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <MobileFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MobileFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  width: 85%;
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  padding-right: 16px;
  z-index: 2;
`;

const ButtonWrapper = styled(UnstyledButton)`
  align-self: flex-end;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavLink = styled.a`
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  :hover {
    color: ${COLORS.gray[500]};
  }
`;

const MobileFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.medium};
`;

export default MobileMenu;
