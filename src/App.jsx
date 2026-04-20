import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ImageGrid from "./components/ImageGrid";
import ImageModal from "./components/Modal";
import SkeletonGrid from "./components/SkeletonGrid";
import Fab from "./components/Fab";
import PageWrapper from "./components/PageWrapper";
import SearchSuggestions from "./components/SearchSuggestions";

import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { fetchImages } from "./services/unsplash";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH
  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const data = await fetchImages(page, query);

        if (!Array.isArray(data)) return;

        setImages((prev) => {
          const existing = new Set(prev.map((img) => img.id));
          const filtered = data.filter(
            (img) => !existing.has(img.id)
          );
          return [...prev, ...filtered];
        });
      } catch (err) {
        console.error("Error loading images:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, query]);

  // SEARCH
  const handleSearch = (value) => {
    setImages([]);
    setPage(1);
    setQuery(value);
  };

  // INFINITE SCROLL
  const observerRef = useInfiniteScroll(() => {
    if (!loading) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Navbar onSearch={handleSearch} />

      <SearchSuggestions onSelect={handleSearch} />

      <Flex>
        <Sidebar onSelect={handleSearch} />

        <Box flex="1">
          <PageWrapper>
            {loading && images.length === 0 ? (
              <SkeletonGrid />
            ) : (
              <ImageGrid
                images={images}
                onImageClick={setSelected}
              />
            )}
          </PageWrapper>

          {loading && images.length > 0 && <SkeletonGrid />}

          <div ref={observerRef} />
        </Box>
      </Flex>

      <ImageModal
        selected={selected}
        onClose={() => setSelected(null)}
      />

      <Fab />
    </Box>
  );
}

export default App;
