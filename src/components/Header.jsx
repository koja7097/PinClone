import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      p={4}
      justify="space-between"
      align="center"
      borderBottom="1px solid #2D3748"
      direction={{ base: "column", md: "row" }}
      gap={2}
    >
      <Heading size="md">VisionVault ✨</Heading>
      <Text color="gray.400">Discover ideas that move you</Text>
    </Flex>
  );
}