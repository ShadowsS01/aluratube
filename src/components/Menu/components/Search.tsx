import { styled } from "../../../../stitches.config";
import type { SearchProps } from "../type";

const StyledSearch = styled("div", {
  display: "flex",
  alignItems: "center",
  maxWidth: "425px",
  width: "50%",
  borderRadius: "40px",
  overflow: "hidden",
  backgroundColor: "$backgroundBase",

  input: {
    width: "80%",
    height: "40px",
    padding: "4px 6px 4px 16px",
    borderTopLeftRadius: "1.5rem",
    borderBottomLeftRadius: "1.5rem",
    border: "2px solid $borderBase",
    outline: "none",
    color: "$textColorBase",
    backgroundColor: "$backgroundBase",
    "&:hover": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "&:focus-visible": {
      borderColor: "$primary",
    },
  },

  button: {
    flex: 1,
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: "$backgroundLevel2",
    boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",
    borderTop: "2px solid $borderBase",
    borderBottom: "2px solid $borderBase",
    borderRight: "2px solid $borderBase",
    borderLeft: "2px solid transparent",
    borderTopRightRadius: "1.5rem",
    borderBottomRightRadius: "1.5rem",
    width: "40px",
    height: "40px",
    transition: "0.3s",
    "&:hover": {
      opacity: 0.7,
    },
    "&:focus-visible": {
      border: "2px solid $primary",
    },
  },
});

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Buscar videos..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button type="button">🔎</button>
    </StyledSearch>
  );
};
