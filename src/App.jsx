import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import Loader from "./components/Loader";
import ImageModal from "./components/Modal"; 
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { fetchImages } from "./services/unsplash";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);

      try {
        const newImages = await fetchImages(page, query);

        
        if (!Array.isArray(newImages)) return;

        setImages((prev) => {
          const existing = new Set(prev.map((img) => img.id));
          const filtered = newImages.filter(
            (img) => !existing.has(img.id)
          );
          return [...prev, ...filtered];
        });
      } catch (err) {
        console.error("Image load failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [page, query]);

  // Search resets feed
  const handleSearch = (q) => {
    setImages([]);
    setPage(1);
    setQuery(q);
  };

  
  const observerRef = useInfiniteScroll(() => {
    if (!loading) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Header />
      <SearchBar onSearch={handleSearch} />

      <ImageGrid images={images} onImageClick={setSelected} />

      {loading && <Loader />}

      <div ref={observerRef} />

      <ImageModal
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </Box>
  );
}

export default App;
