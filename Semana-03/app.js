const form = document.getElementById("form");
const list = document.getElementById("list");
const stats = document.getElementById("stats");

const nameInput = document.getElementById("name");
const locationInput = document.getElementById("location");
const priceInput = document.getElementById("price");
const typeInput = document.getElementById("type");
const statusInput = document.getElementById("status");

const search = document.getElementById("search");
const filterType = document.getElementById("filterType");
const filterStatus = document.getElementById("filterStatus");

const toggleDark = document.getElementById("toggleDark");

let properties = [
  {
    id: 1,
    name: "Villa Luxury",
    location: "Cartagena",
    price: 500,
    type: "Villa",
    status: "Activo",
    image: "Media/villa-luxury.jpg"
  },
  {
    id: 2,
    name: "Apartamento Moderno",
    location: "Bogotá",
    price: 200,
    type: "Apartamento",
    status: "Activo",
    image: "Media/apartamento-moderno.jpg"
  },
  {
    id: 3,
    name: "Casa Perla",
    location: "Panama",
    price: 800,
    type: "Casa",
    status: "Activo",
    image: "Media/Casa-Perla.jpg"
  },
  {
    id: 4,
    name: "Finca de Verano",
    location: "Mesitas",
    price: 600,
    type: "Finca",
    status: "Activo",
    image: "Media/Finca-Verano.jpg"
  },
];

let favorites = JSON.parse(localStorage.getItem("fav")) || [];

/* RENDER */
function render() {
  list.innerHTML = "";

  let filtered = properties.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );

  if (filterType.value) {
    filtered = filtered.filter(p => p.type === filterType.value);
  }

  if (filterStatus.value) {
    filtered = filtered.filter(p => p.status === filterStatus.value);
  }

  filtered.forEach(p => {
    const fav = favorites.includes(p.id) ? "❤️" : "🤍";

    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${p.image}" class="card-img">

      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.location}</p>
        <p>${p.type} | ${p.status}</p>
        <p>$${p.price}</p>

        <div class="actions">
          <button onclick="toggleFav(${p.id})">${fav}</button>
          <button onclick="removeItem(${p.id})">🗑️</button>
        </div>
      </div>
    `;

    list.appendChild(li);
  });

  stats.textContent = `${properties.length} propiedades | ${favorites.length} favoritos`;
}

/* AGREGAR */
form.addEventListener("submit", e => {
  e.preventDefault();

  const newProp = {
    id: Date.now(),
    name: nameInput.value,
    location: locationInput.value,
    price: priceInput.value,
    type: typeInput.value,
    status: statusInput.value,
    image: "Media/casa-playa.jpg"
  };

  properties.push(newProp);
  form.reset();
  render();
});

/* FAVORITOS */
function toggleFav(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("fav", JSON.stringify(favorites));
  render();
}

/* ELIMINAR */
function removeItem(id) {
  properties = properties.filter(p => p.id !== id);
  render();
}

/* FILTROS */
search.addEventListener("input", render);
filterType.addEventListener("change", render);
filterStatus.addEventListener("change", render);

/* DARK MODE */
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* INIT */
render();