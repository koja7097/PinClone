import { Flex, Button } from "@chakra-ui/react";

const suggestions = [
  "nature",
  "tech",
  "people",
  "food",
  "travel",
  "minimal",
  "dark",
  "cars",
];

export default function SearchSuggestions({ onSelect }) {
  return (
    <Flex gap={2} p={4} wrap="wrap">
      {suggestions.map((item) => (
        <Button
          key={item}
          size="sm"
          borderRadius="full"
          onClick={() => onSelect(item)}
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
}