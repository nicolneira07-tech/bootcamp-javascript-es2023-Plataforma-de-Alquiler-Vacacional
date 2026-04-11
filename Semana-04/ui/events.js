import {
  addProperty,
  deleteProperty,
  toggleFavorite,
  getProperties
} from '../services/index.js';

import { renderProperties } from './render.js';

export const initEvents = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      location: form.location.value,
      price: form.price.value,
      category: form.category.value
    };

    addProperty(data);
    renderProperties();
    form.reset();
  });

  document.getElementById('search').addEventListener('input', (e) => {
    renderProperties({ text: e.target.value });
  });

  window.deleteProp = (id) => {
    deleteProperty(id);
    renderProperties();
  };

  window.toggleFav = (id) => {
    toggleFavorite(id);
    renderProperties();
  };

  // REPORTES (dynamic import)
  document.getElementById('addBtn').addEventListener('click', () => {
  const data = {
    name: document.getElementById('name').value,
    location: document.getElementById('location').value,
    price: document.getElementById('price').value,
    category: document.getElementById('category').value
  };

  addProperty(data);
  renderProperties();
  });

  // EXPORT
  document.getElementById('exportBtn').addEventListener('click', async () => {
    const { exportToCSV } = await import('../features/export.js');
    exportToCSV(getProperties());
  });

  document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('light');
  });
};