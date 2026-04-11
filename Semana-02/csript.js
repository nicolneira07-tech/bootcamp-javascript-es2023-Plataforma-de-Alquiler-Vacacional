const STORAGE = "airbnb";

// =========================
// 🧠 STATE
// =========================
let state = {
  items: [],
  filter: "all",
  search: ""
};

// =========================
// 💾 STORAGE
// =========================
const save = () => localStorage.setItem(STORAGE, JSON.stringify(state.items));
const load = () => state.items = JSON.parse(localStorage.getItem(STORAGE)) || [];

// =========================
// ➕ CREATE
// =========================
const add = (data) => {
  state.items.push({
    id: Date.now(),
    active: true,
    favorite: false,
    rating: (Math.random()*5).toFixed(1),
    ...data
  });
  save();
  render();
};

// =========================
// ❌ DELETE
// =========================
const remove = id => {
  state.items = state.items.filter(i => i.id !== id);
  save();
  render();
};

// =========================
// ❤️ FAVORITE
// =========================
const toggleFav = id => {
  state.items = state.items.map(i =>
    i.id === id ? {...i, favorite: !i.favorite} : i
  );
  save();
  render();
};

// =========================
// 🔄 STATUS
// =========================
const toggleActive = id => {
  state.items = state.items.map(i =>
    i.id === id ? {...i, active: !i.active} : i
  );
  save();
  render();
};

// =========================
// ✏️ EDIT
// =========================
let editingId = null;

const openModal = (item) => {
  editingId = item.id;
  editName.value = item.name;
  editLocation.value = item.location;
  editPrice.value = item.price;
  modal.classList.remove("hidden");
};

const closeModal = () => modal.classList.add("hidden");

const saveEdit = () => {
  state.items = state.items.map(i =>
    i.id === editingId
      ? {...i, name: editName.value, location: editLocation.value, price: editPrice.value}
      : i
  );
  save();
  render();
  closeModal();
};

// =========================
// 🔍 FILTERS
// =========================
const applyFilters = () => {
  let res = [...state.items];

  if (state.filter !== "all") {
    res = res.filter(i => state.filter === "active" ? i.active : !i.active);
  }

  if (state.search) {
    res = res.filter(i =>
      i.name.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  return res;
};

// =========================
// 📊 STATS
// =========================
const stats = () => {
  const total = state.items.length;
  const favs = state.items.filter(i => i.favorite).length;
  const active = state.items.filter(i => i.active).length;

  statsEl.innerHTML = `
    Total: ${total} | ❤️ ${favs} | Disponibles: ${active}
  `;
};

// =========================
// 🎨 RENDER
// =========================
const render = () => {
  const items = applyFilters();

  list.innerHTML = items.map(i => `
    <div class="card">
      <img src="https://source.unsplash.com/400x300/?house,${i.location}" />

      <div class="card-content">
        <h3>${i.name}</h3>
        <p>📍 ${i.location}</p>
        <p>⭐ ${i.rating}</p>
        <p>$${i.price}</p>

        <button onclick="toggleFav(${i.id})">
          ${i.favorite ? "❤️" : "🤍"}
        </button>

        <button onclick="toggleActive(${i.id})">
          ${i.active ? "Activo" : "Inactivo"}
        </button>

        <button onclick='openModal(${JSON.stringify(i)})'>
          Editar
        </button>

        <button onclick="remove(${i.id})">
          Eliminar
        </button>
      </div>
    </div>
  `).join("");

  stats();
};

// =========================
// EVENTS
// =========================
form.onsubmit = e => {
  e.preventDefault();

  add({
    name: name.value,
    location: location.value,
    price: price.value
  });

  form.reset();
};

search.oninput = e => {
  state.search = e.target.value;
  render();
};

filter.onchange = e => {
  state.filter = e.target.value;
  render();
};

// =========================
// 🌙 DARK MODE
// =========================
document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeBtn");

  if (!themeBtn) {
    console.error("❌ No se encontró el botón themeBtn");
    return;
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Cambiar icono
    if (document.body.classList.contains("light")) {
      themeBtn.textContent = "🌙";
    } else {
      themeBtn.textContent = "☀️";
    }

    console.log("✅ Click funcionando");
  });

});

// =========================
// INIT
// =========================
load();
render();