import React from "react";
import { ThemeConsumer } from "styled-components";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { Button } from "./Button";

const ToggleMode = () => (
  <ThemeConsumer>
    {(theme) => (
      <Button
        onClick={() =>
          theme.setTheme(
            theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
          )
        }
      >
        {theme.mode === "dark" ? (
          <HiMoon size="20px" />
        ) : (
          <HiOutlineMoon size="20px" />
        )}
        <span style={{ marginLeft: "8px" }}>
          {theme.mode === "dark" ? "Dark" : "Light"} Mode
        </span>
      </Button>
    )}
  </ThemeConsumer>
);

export default ToggleMode;
