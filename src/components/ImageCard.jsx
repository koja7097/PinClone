import { Box, Image, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getLikes, toggleLike } from "../utils/storage";
import { addToBoard } from "../utils/boards";

const MotionBox = motion(Box);

export default function ImageCard({ img, onClick }) {
  const liked = getLikes().includes(img.id);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(img.id);
  };

  return (
    <MotionBox
      position="relative"
      mb="16px"
      cursor="pointer"
      onClick={() => onClick(img)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* IMAGE */}
      <Image
        src={img.urls.regular}
        w="100%"
        borderRadius="lg"
        loading="lazy"
        transition="0.3s"
      />

      {/* 🔥 HOVER OVERLAY */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        borderRadius="lg"
        bg="blackAlpha.600"
        opacity="0"
        _hover={{ opacity: 1 }}
        transition="0.2s"
      />

      {/* ❤️ LIKE BUTTON */}
      <IconButton
        position="absolute"
        top="2"
        right="2"
        size="sm"
        bg="blackAlpha.800"
        color="white"
        _hover={{ bg: "blackAlpha.900" }}
        onClick={handleLike}
        aria-label="Like image"
      >
        {liked ? "❤️" : "🤍"}
      </IconButton>

      <IconButton
  position="absolute"
  bottom="2"
  right="2"
  size="sm"
  bg="blackAlpha.800"
  color="white"
  onClick={(e) => {
    e.stopPropagation();
    window.open(img.urls.regular, "_blank");
  }}
  aria-label="download"
>
  ⬇️
</IconButton>

<IconButton
  position="absolute"
  bottom="2"
  left="2"
  size="sm"
  bg="blackAlpha.800"
  color="white"
  onClick={(e) => {
    e.stopPropagation();
    const name = prompt("Board name:");
    if (name) addToBoard(name, img);
  }}
>
  📌
</IconButton>

      {/* 🧠 CATEGORY TAG */}
      {img.category && (
        <Text
          position="absolute"
          bottom="2"
          left="2"
          fontSize="xs"
          bg="blackAlpha.700"
          px="2"
          py="1"
          borderRadius="md"
        >
          {img.category}
        </Text>
      )}
    </MotionBox>
  );
}