import { Box, VStack, Text } from "@chakra-ui/react";

const categories = ["All", "Nature", "Tech", "Food", "Travel", "People"];

export default function Sidebar({ onSelect }) {
  return (
    <Box
      w="220px"
      p={4}
      bg="gray.950"
      display={{ base: "none", md: "block" }}
    >
      <VStack align="start" spacing={4}>
        {categories.map((cat) => (
          <Text
            key={cat}
            cursor="pointer"
            _hover={{ color: "pink.400" }}
            onClick={() => onSelect(cat.toLowerCase())}
          >
            {cat}
          </Text>
        ))}
      </VStack>
    </Box>
  );
}