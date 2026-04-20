const KEY = "boards_v1";

export const getBoards = () =>
  JSON.parse(localStorage.getItem(KEY)) || {};

export const addToBoard = (board, image) => {
  const data = getBoards();

  if (!data[board]) data[board] = [];

  data[board].push(image);

  localStorage.setItem(KEY, JSON.stringify(data));
};