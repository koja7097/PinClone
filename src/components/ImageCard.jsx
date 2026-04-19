import { Box, Image, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getLikes, toggleLike } from "../utils/storage";

const MotionBox = motion(Box);

export default function ImageCard({ img, onClick }) {
  // ✅ derive directly (no state needed)
  const liked = getLikes().includes(img.id);

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(img.id);
    // no setState needed → React stays clean
  };

  return (
    <MotionBox
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      mb={4}
      cursor="pointer"
      position="relative"
      onClick={() => onClick(img)}
    >
      <Image src={img.urls.small} borderRadius="lg" w="100%" />

      <IconButton
        position="absolute"
        top="2"
        right="2"
        size="sm"
        bg="blackAlpha.600"
        onClick={handleLike}
      >
        {liked ? "❤️" : "🤍"}
      </IconButton>
    </MotionBox>
  );
}