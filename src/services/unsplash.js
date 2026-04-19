const categories = ["nature", "tech", "people", "food", "travel"];

export const fetchImages = async (page = 1, query = "") => {
  const limit = 12;

  const images = Array.from({ length: limit }, (_, i) => {
    const id = page * limit + i;

    return {
      id: id,
      category: categories[id % categories.length],
      urls: {
        regular: `https://picsum.photos/500/700?random=${id}`,
      },
    };
  });

  if (query) {
    return images.filter((img) =>
      img.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  return images;
};