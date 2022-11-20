import { styled } from "../../../stitches.config";
import { spin } from "../../styles/globalStyles";

export const StyledVideo = styled("div", {
  "& *": {
    color: "$textColorBase",
  },
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
  marginBottom: "32px",
  padding: "0px 10px",
  "@bp1": {
    marginTop: "32px",
  },
  "& .div-loadingVideo": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "& h2": {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      "& svg": {
        animation: `${spin} 1s linear infinite`,
      },
    },
  },
  "& div": {
    height: "100%",
    width: "100%",
    maxWidth: "1100px",
    maxHeight: "80vh",
    aspectRatio: "16 / 9",
    "& .back": {
      border: 0,
      outline: "none",
      textDecoration: "none",
      maxWidth: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      padding: "8px",
      backgroundColor: "$primary",
      "&, *": {
        color: "#f0f0f0",
      },
      borderRadius: "6px",
      fontSize: "16px",
      marginBottom: "6px",
      cursor: "pointer",
      "&:hover, &:focus-visible": {
        opacity: "0.8",
        gap: "6px",
      },
      "&:focus-visible": {
        boxShadow: "0 0 0 3px $colors$textColorBase",
        textDecoration: "underline",
      },
    },
    "& iframe": {
      borderRadius: "12px",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1)",
    },
  },
});
