import { IconButton } from "@chakra-ui/react";

export default function Fab() {
  return (
    <IconButton
      position="fixed"
      bottom="6"
      right="6"
      borderRadius="full"
      size="lg"
      bg="pink.500"
      color="white"
      _hover={{ bg: "pink.600" }}
      aria-label="scroll top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </IconButton>
  );
}