alert("JS CARGADO");
console.log("🔥 JS FUNCIONANDO");

import { addProperty, getProperties } from './services/index.js';
import { renderProperties } from './ui/render.js';

// 🧨 LIMPIAR DATOS VIEJOS AUTOMÁTICAMENTE
localStorage.removeItem("properties");

// 🔥 DATOS INICIALES CORRECTOS
let data = getProperties();

if (data.length === 0) {
  addProperty({
    id: 1,
    name: "Villa en Cartagena",
    location: "Cartagena",
    price: 500,
    category: "villa",
    favorite: false
  });

  addProperty({
    id: 2,
    name: "Apartamento en Medellín",
    location: "Medellín",
    price: 200,
    category: "apartamento",
    favorite: false
  });
}


// BOTONES
const addBtn = document.getElementById('addBtn');
const themeBtn = document.getElementById('themeBtn');
const reportBtn = document.getElementById('reportBtn');
const exportBtn = document.getElementById('exportBtn');
const search = document.getElementById('search');

// INPUTS
const nameInput = document.getElementById('name');
const locationInput = document.getElementById('location');
const priceInput = document.getElementById('price');
const categoryInput = document.getElementById('category');

// INIT
renderProperties();

// AGREGAR
addBtn.addEventListener('click', () => {
  const property = {
  id: Date.now(), // 🔥 CLAVE
  name: nameInput.value,
  location: locationInput.value,
  price: priceInput.value,
  category: categoryInput.value,
  favorite: false
};

  addProperty(property);
  renderProperties();

  nameInput.value = '';
  locationInput.value = '';
  priceInput.value = '';
});

// BUSCAR
search.addEventListener('input', () => {
  renderProperties({ search: search.value });
});

// DARK MODE
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// REPORTES (🔥 dynamic import)
reportBtn.addEventListener('click', async () => {
  const { getStats } = await import('./features/reports.js');

  const stats = getStats(getProperties());

  alert(`
📊 Reportes:
Total: ${stats.total}
Promedio: $${stats.avg}
  `);
});

// EXPORTAR CSV
exportBtn.addEventListener('click', () => {
  const data = getProperties();

  const csv = data.map(p =>
    `${p.name},${p.location},${p.price},${p.category}`
  ).join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'propiedades.csv';
  a.click();

});