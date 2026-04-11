const KEY = "properties";

export const getProperties = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const addProperty = (property) => {
  const data = getProperties();
  data.push(property);
  localStorage.setItem(KEY, JSON.stringify(data));
};