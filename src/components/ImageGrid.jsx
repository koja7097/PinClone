import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

const MotionBox = motion(Box);

export default function ImageGrid({ images, onImageClick }) {
  return (
    <Box
      px={4}
      py={6}
      sx={{
        columnCount: {
          base: 2,
          md: 3,
          lg: 4,
          xl: 5,
        },
        columnGap: "16px",
      }}
    >
      {images.map((img) => (
        <MotionBox
          key={img.id}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          mb="16px"
          breakInside="avoid"
        >
          <ImageCard img={img} onClick={onImageClick} />
        </MotionBox>
      ))}
    </Box>
  );
}