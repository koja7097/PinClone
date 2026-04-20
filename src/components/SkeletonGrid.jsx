import { Box, Skeleton } from "@chakra-ui/react";

export default function SkeletonGrid() {
  return (
    <Box
      px={4}
      py={6}
      sx={{
        columnCount: { base: 2, md: 3, lg: 4 },
        columnGap: "16px",
      }}
    >
      {[...Array(10)].map((_, i) => (
        <Skeleton
          key={i}
          height={`${200 + (i % 5) * 40}px`}
          mb="16px"
          borderRadius="lg"
        />
      ))}
    </Box>
  );
}