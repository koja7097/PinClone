import { Box, Heading } from "@chakra-ui/react";
import { getLikes } from "../utils/storage";
import ImageGrid from "../components/ImageGrid";

export default function Liked({ images }) {
  const likedIds = getLikes();

  const likedImages = images.filter((img) =>
    likedIds.includes(img.id)
  );

  return (
    <Box p={6}>
      <Heading mb={4}>❤️ Saved Images</Heading>
      <ImageGrid images={likedImages} onImageClick={() => {}} />
    </Box>
  );
}