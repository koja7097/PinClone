export const getLikes = () => {
  return JSON.parse(localStorage.getItem("likes")) || [];
};

export const toggleLike = (id) => {
  let likes = getLikes();

  if (likes.includes(id)) {
    likes = likes.filter((item) => item !== id);
  } else {
    likes.push(id);
  }

  localStorage.setItem("likes", JSON.stringify(likes));
  return likes;
};