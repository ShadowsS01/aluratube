import { styled } from "../../../stitches.config";

export const StyledHeader = styled("div", {
  "& a": {
    border: "none",
    outline: "none",
    textDecoration: "none",
    color: "$textColorBase",

    "&:hover, &:focus-visible": {
      textDecoration: "underline",
      opacity: "0.7",
    },
  },

  "& .user-info": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "16px 32px",
    gap: "16px",
  },

  "& .perfil-link": {
    borderRadius: "100%",
    width: "80px",
    height: "80px",
    "&:focus-visible": {
      boxShadow: "0 0 0 0.18rem $colors$primary",
    },
  },

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },

  "& p": {
    color: "$textColorBase",
  },
});

export const StyledBanner = styled("div", {
  backgroundColor: "rgba(24, 24, 27, 1)",
  height: "230px",
});
