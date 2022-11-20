import { globalCss, darkTheme, keyframes } from "../../stitches.config";

export const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const pageInit = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-2rem)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    transition: "linear .3s",
    animation: `${pageInit} 1s`,
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  "html:focus-within": { scrollBehavior: "smooth" },
  body: {
    minHeight: "100vh",
    fontFamily: "$sans",
    backgroundColor: "$backgroundBase",
    color: "$textColorBase",

    [`.${darkTheme} &`]: {
      backgroundColor: "$backgroundBase",
      color: "$textColorBase",
    },
  },

  "*::-webkit-scrollbar": {
    height: "0.625rem",
    width: "0.625rem",
  },
  "*::-webkit-scrollbar-track": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  "*::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: "gray",
  },

  ".div-notification": {
    zIndex: "999999 !important",
  },
  ".message ": {
    backgroundColor: "$backgroundOpacity !important",
    color: "$textColorBase !important",
    backdropFilter: "blur(16px)",
  },
});
