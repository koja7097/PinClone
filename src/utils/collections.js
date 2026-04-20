const KEY = "collections_v1";

export const getCollections = () =>
  JSON.parse(localStorage.getItem(KEY)) || {};

export const saveToCollection = (name, image) => {
  const data = getCollections();

  if (!data[name]) data[name] = [];

  data[name].push(image);

  localStorage.setItem(KEY, JSON.stringify(data));
};