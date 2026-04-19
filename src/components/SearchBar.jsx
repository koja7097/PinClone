import { useState } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <Flex justify="center" p={4} gap={2}>
      <Input
        placeholder="Search for inspiration..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        bg="gray.800"
      />

      <Button colorScheme="pink" onClick={() => onSearch(value)}>
        Search
      </Button>
    </Flex>
  );
}