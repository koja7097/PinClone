import { Flex, Text, Input, Avatar, Button } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onSearch }) {
  return (
    <Flex
      px={6}
      py={4}
      bg="gray.900"
      color="white"
      align="center"
      justify="space-between"
      position="sticky"
      top="0"
      zIndex="100"
      borderBottom="1px solid #2d2d2d"
    >
      <Text fontSize="xl" fontWeight="bold">
        PinClone
      </Text>

      <Input
        placeholder="Search anything..."
        maxW="400px"
        bg="white"
        color="black"
        onChange={(e) => onSearch(e.target.value)}
      />

      <Flex gap={4} align="center">
        <Button size="sm" variant="ghost">
          Explore
        </Button>
        <Button size="sm" variant="ghost">
          Create
        </Button>
        <Avatar size="sm" name="User" />
        <ThemeToggle/>
      </Flex>
    </Flex>
  );
}