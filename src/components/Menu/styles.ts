import { styled } from "../../../stitches.config";

export const StyledMenu = styled("header", {
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  height: "56px",
  padding: "0 16px",
  gap: "16px",
  width: "100%",
  backgroundColor: "$backgroundOpacity",
  backdropFilter: "blur(16px)",
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.2)",

  "& a": {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    padding: "6px",
    outline: "none",
    "&:hover,&:focus": {
      opacity: "0.5",
    },
    "&:focus-visible": {
      boxShadow: "0 0 0 0.18rem $colors$primary",
    },
  },

  "& svg": {
    width: "100%",
    maxWidth: "80px",
    "@bp2": {
      maxWidth: "127px",
    },
    "& > .text": {
      fill: "$textColorBase",
    },
  },
});
