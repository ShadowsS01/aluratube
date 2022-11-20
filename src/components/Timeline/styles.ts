import { styled } from "../../../stitches.config";

export const StyledTimeline = styled("div", {
  flex: 1,
  width: "100%",
  padding: "16px",
  overflow: "hidden",
  "& h2": {
    fontSize: "16px",
    marginBottom: "16px",
    textTransform: "capitalize",
    color: "$textColorBase",
  },
  "& img": {
    aspectRatio: "16/9",
    borderRadius: "10px",
    fontWeight: "500",
    objectFit: "cover",
    width: "100%",
    height: "auto",
  },
  "& section": {
    width: "100%",
    overflowX: "auto",
    padding: "8px 4px",
    "& div": {
      width: "calc(100vw - 16px * 4)",
      display: "grid",
      gridGap: "12px",
      paddingBottom: "12px",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gridAutoFlow: "column",
      gridAutoColumns: "minmax(220px, 1fr)",
      overflowX: "scroll",
      scrollSnapType: "x mandatory",
      "& a": {
        minHeight: "210px",
        scrollSnapAlign: "start",
        textDecoration: "none",
        outline: "none",
        border: "2px solid transparent",
        borderRadius: "12px",
        "&:hover, &:focus": {
          opacity: "0.6",
          borderColor: "$primary",
        },
        "& span": {
          padding: "10px 6px 8px 4px",
          display: "block",
          color: "$textColorBase",
        },
      },
    },
  },
});
