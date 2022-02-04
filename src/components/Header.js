import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BackgroundElement, BackgroundElementShadow, TextMode } from "../utils/theme";
import ToogleMode from "./ToggleMode";
import { Container } from "../utils/GlobalStyles";

const Header = () => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <Title to="/">Where in the world?</Title>
        <ToogleMode />
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  background-color: ${BackgroundElement};
  box-shadow: 1px 2px 15px 1px ${BackgroundElementShadow};
`;

const HeaderInner = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: ${TextMode};
  text-decoration: none;

  @media (min-width: 1100px) {
    font-size: 24px;
  }
`;

export default Header;
