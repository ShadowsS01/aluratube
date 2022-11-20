import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont",
    },
    colors: {
      primary: "#1d90f5",
      backgroundBase: "#f3f4f6",
      backgroundLevel1: "#e5e7eb",
      backgroundLevel2: "#d1d5db",
      backgroundOpacity: "rgba(255, 255, 255, 0.60)",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
  },

  media: {
    bp1: "(max-width: 400px)",
    bp2: "(min-width: 600px)",
    bp3: "(min-width: 768px)",
  },

  themeMap: {
    ...defaultThemeMap,
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundOpacity: "rgba(32, 32, 32, 0.75)",
    borderBase: "#383838",
    textColorBase: "#e5e7eb",
  },
});
