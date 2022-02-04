import styled from "styled-components";
import { TextMode,BackgroundElement } from "../utils/theme";

export const Button = styled.button`
  background: ${BackgroundElement};
  border: 0;
  color: ${TextMode};
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ButtonElement = styled(Button)`
  padding: 0 24px;
  height: 100%;
  height: 56px;
  width: 100%;
  border-radius: 5px;
  justify-content: space-between;
`;