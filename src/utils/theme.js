import style from "styled-theming";

export const BackgroundMode = style("mode", {
  light: "hsl(0, 0%, 98%)",
  dark: "hsl(207, 26%, 17%)",
});

export const BackgroundElement = style("mode", {
  light: "hsl(0, 0%, 100%)",
  dark: "hsl(209, 23%, 22%)",
});

export const BackgroundElementShadow = style("mode", {
  light: "hsla(0, 0%, 52%,.4)",
  dark: "hsla(207, 25%, 11%,.4)",
});

export const TextMode = style("mode", {
  light: "hsl(200, 15%, 8%)",
  dark: "hsl(0, 0%, 100%)",
});

export const InputText = style("mode", {
  light: "hsl(0, 0%, 52%)",
  dark: "hsl(0, 0%, 100%)",
});

// export { BackgroundMode, BackgroundElement, TextMode, InputText };
