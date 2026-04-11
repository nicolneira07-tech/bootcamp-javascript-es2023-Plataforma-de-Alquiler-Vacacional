import { getProperties } from '../services/index.js';

const images = [
  "Media/1.jpg",
  "Media/2.jpg",
  "Media/3.jpg",
  "Media/4.jpg"
];

window.deleteProp = (id) => {
  let data = getProperties().filter(p => p.id !== id);
  localStorage.setItem('properties', JSON.stringify(data));
  location.reload();
};

window.toggleFav = (id) => {
  let data = getProperties();

  data = data.map(p => {
    if (p.id === id) p.favorite = !p.favorite;
    return p;
  });

  localStorage.setItem('properties', JSON.stringify(data));
  location.reload();
};

export const renderProperties = ({ search = '' } = {}) => {
  const container = document.getElementById('list');

  if (!container) {
    console.error("❌ NO EXISTE #list en el HTML");
    return;
  }

  container.innerHTML = '';

  let data = getProperties();

  if (search) {
    data = data.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (data.length === 0) {
    container.innerHTML = `<p style="color:white;">No hay propiedades 😢</p>`;
    return;
  }

  data.forEach((p, index) => {
    container.innerHTML += `
      <li>
        <img src="${images[index % images.length]}" class="card-img"/>

        <div class="card-body">
          <h3>${p.name}</h3>
          <p>📍 ${p.location}</p>
          <p>🏷️ ${p.category}</p>
          <p>💲 ${p.price}</p>

          <div class="actions">
            <button onclick="toggleFav(${p.id})">
              ${p.favorite ? '❤️' : '🤍'}
            </button>

            <button onclick="deleteProp(${p.id})">🗑️</button>
          </div>
        </div>
      </li>
    `;
  });
};