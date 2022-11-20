import { styled } from "../../../stitches.config";
import { spin } from "../../styles/globalStyles";

export const StyledRegisterVideo = styled("div", {
  "*": {
    color: "$textColorBase",
  },

  "& .add-video": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    fontSize: "20px",
    position: "fixed",
    bottom: "16px",
    right: "16px",
    backgroundColor: "rgba(255, 0, 8, 0.7)",
    zIndex: "9999",
    backdropFilter: "blur(16px)",
    border: 0,
    outline: "none",
    cursor: "pointer",

    "&:hover, &:focus-visible": {
      backgroundColor: "rgba(255, 0, 8, 0.4)",
      boxShadow: "0 0 0 0.18rem rgba(255, 0, 8, 1)",
      transform: "rotate(180deg)",
    },
  },

  "& .close-modal-div": {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "8px",
    right: "16px",
    marginTop: "4px",
    borderRadius: "50%",
    padding: "4px",

    "&:hover, &:focus-visible": {
      backgroundColor: "rgba(255, 0, 8, 0.2)",
      transform: "rotate(180deg)",
    },

    "& > *": {
      cursor: "pointer",
      color: "$textColorBase !important",
    },

    "& .close-modal-btn": {
      width: "25px",
      height: "25px",
      color: "inherit",
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    },
  },

  "& form": {
    width: "100%",
    padding: "2%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "99999",
    display: "flex",
    justifyContent: "center",

    "& .form-container": {
      overflowY: "auto",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      maxWidth: "400px",
      borderRadius: "8px",
      backgroundColor: "$backgroundLevel2",
      padding: "20px",
      paddingTop: "26px",

      "& .title-form": {
        marginBottom: "12px",
      },
    },

    "@bp1": {
      padding: 0,
    },
  },

  "& .input-div, & .select-div": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "12px",
    "& span": {
      color: "rgba(255, 0, 8, 1)",
      fontWeight: "600",
      animation: "none",
    },
    "& span::selection": {
      backgroundColor: "rgba(255, 0, 8, 0.2)",
    },
  },

  "& input, & select": {
    borderRadius: "8px",
    border: "1px solid $borderBase",
    padding: "10px 10px",
    outline: "none",
    color: "$textColorBase",
    backgroundColor: "$backgroundBase",
    transition: "0.3s",
    "&:hover": {
      borderColor: "black",
    },
    "&:focus-visible": {
      borderColor: "transparent",
      boxShadow: "0 0 0 0.15rem rgba(255, 0, 8, 0.7)",
    },
  },
  "& .view-thumbnail": {
    display: "flex",
    marginTop: "16px",
    "& img": {
      width: "100%",
      height: "80%",
      objectFit: "cover",
      borderRadius: "10px",
    },
  },

  "button[type=submit]": {
    width: "100%",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 0, 8, 1)",
    padding: "12px 0px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
    outline: "none",
    marginTop: "10px",
    "&:hover, &:focus-visible": {
      backgroundColor: "rgba(255, 0, 8, 0.7)",
      boxShadow: "0 0 0 0.18rem rgba(0, 0, 0, 0.5)",
    },
    "&:disabled": {
      opacity: "0.5",
      boxShadow: "none",
      cursor: "not-allowed",
    },
    "& .icon-load": {
      animation: `${spin} 1s linear infinite`,
    },
  },
});
