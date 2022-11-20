import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { styled } from "../../../../stitches.config";

import { BiMoon, BiSun } from "react-icons/bi";

const StyledThemeToggle = styled("button", {
  cursor: "pointer",

  "&>*": {
    animation: "none",
    transition: "0",
  },

  outline: "none",
  display: "flex",
  alignItems: "center",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "$backgroundBase",
  color: "$textColorBase",
  border: "2px solid $borderBase",
  backdropFilter: "blur(16px)",

  "&:hover, &:focus-visible": {
    backgroundColor: "$backgroundOpacity",
    borderColor: "$primary",
  },
});

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <StyledThemeToggle
      type="button"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
      title={`Trocar o tema para ${theme === "dark" ? "claro" : "escuro"}`}
    >
      {isDark() ? <BiSun size={25} /> : <BiMoon size={25} />}
    </StyledThemeToggle>
  );
};
