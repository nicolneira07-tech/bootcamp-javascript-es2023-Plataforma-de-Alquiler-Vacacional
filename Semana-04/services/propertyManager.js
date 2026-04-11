import { saveData, loadData } from './storage.js';
import Property from '../models/Property.js';

let properties = loadData();

export const getProperties = () => properties;

export const addProperty = (data) => {
  const newProperty = new Property(data);
  properties.push(newProperty);
  saveData(properties);
};

export const deleteProperty = (id) => {
  properties = properties.filter(p => p.id !== id);
  saveData(properties);
};

export const toggleFavorite = (id) => {
  properties = properties.map(p => {
    if (p.id === id) p.favorite = !p.favorite;
    return p;
  });
  saveData(properties);
};

export const filterProperties = ({ text = '' }) => {
  return properties.filter(({ name, location }) =>
    name.toLowerCase().includes(text.toLowerCase()) ||
    location.toLowerCase().includes(text.toLowerCase())
  );
};