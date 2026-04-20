import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      size="sm"
      onClick={toggleColorMode}
      aria-label="toggle theme"
    >
      {colorMode === "dark" ? "🌞" : "🌙"}
    </IconButton>
  );
}