import { createGlobalStyle } from "styled-components";
import { BackgroundMode, TextMode } from "./theme";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *::after,*::before {
    box-sizing: border-box;
  }
  *{
    font-family: 'Nunito Sans', sans-serif;
  }
  
  body {
    background-color: ${BackgroundMode};
    color: ${TextMode};
    transition: all 300ms ease;
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 85%;
  margin: 0 auto;
`;
