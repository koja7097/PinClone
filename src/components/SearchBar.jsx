import { Input } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value); // instant Pinterest-style search
  };

  return (
    <Input
      placeholder="Search images..."
      value={value}
      onChange={handleChange}
      bg="white"
      color="black"
      mb={4}
    />
  );
}