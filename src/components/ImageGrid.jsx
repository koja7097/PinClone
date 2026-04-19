import { Box } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

export default function ImageGrid({ images, onImageClick }) {
  return (
    <Box
      px={4}
      columnCount={{ base: 2, md: 3, lg: 5 }}
      columnGap="12px"
    >
      {images.map((img) => (
        <ImageCard key={img.id} img={img} onClick={onImageClick} />
      ))}
    </Box>
  );
}