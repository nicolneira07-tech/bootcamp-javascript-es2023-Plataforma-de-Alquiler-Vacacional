<<<<<<< HEAD
// ===============================
// 🏡 DATOS DEL DOMINIO
// ===============================

const rentalProperty = {
  name: 'Apartamento Vista al Mar',
  description: 'Hermoso apartamento con vista al mar, ideal para vacaciones familiares',
  code: 'PROP-001',
  location: {
    city: 'Cartagena',
    country: 'Colombia'
  },
  features: [
    { name: 'WiFi', level: 90 },
    { name: 'Piscina', level: 85 },
    { name: 'Aire Acondicionado', level: 95 },
    { name: 'Cocina Equipada', level: 80 }
  ],
  stats: {
    bookings: 120,
    rating: 4.7,
    reviews: 85
  }
};

// ===============================
// 📦 DESTRUCTURING
// ===============================

const {
  name,
  description,
  code,
  location: { city, country },
  features,
  stats
} = rentalProperty;

// ===============================
// 📊 CÁLCULO DE ESTADÍSTICAS
// ===============================

// Promedio de nivel de servicios
const averageLevel =
  features.reduce((acc, feature) => acc + feature.level, 0) /
  features.length;

// Servicios premium (>85)
const premiumFeatures = features.filter(
  (feature) => feature.level > 85
);

// ===============================
// 🎨 RENDERIZAR HTML
// ===============================

const app = document.getElementById('app');

const renderProperty = () => {
  const featuresHTML = features
    .map(
      (feature) => `
      <li>
        ${feature.name} - Nivel: ${feature.level}%
      </li>
    `
    )
    .join('');

  const html = `
    <div class="card">
      <h2>${name}</h2>
      <p>${description}</p>
      <p><strong>Código:</strong> ${code}</p>
      <p><strong>Ubicación:</strong> ${city}, ${country}</p>

      <h3>Servicios</h3>
      <ul id="featuresList">${featuresHTML}</ul>

      <h3>Estadísticas</h3>
      <p>Reservas: ${stats.bookings}</p>
      <p>Rating: ${stats.rating}</p>
      <p>Reseñas: ${stats.reviews}</p>
      <p>Promedio servicios: ${averageLevel.toFixed(1)}%</p>
      <p>Servicios premium: ${premiumFeatures.length}</p>

      <button id="copyBtn">📋 Copiar Información</button>
      <button id="toggleTheme">🌙 Cambiar Tema</button>
      <button id="toggleFeatures">👀 Mostrar/Ocultar Servicios</button>
    </div>
  `;

  app.innerHTML = html;
};

// ===============================
// 🔔 TOAST
// ===============================

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
=======
// 🌙 Modo oscuro
function toggleDarkMode() {
  const body = document.body;
  const btn = document.querySelector('.toggle-btn');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

// 🔔 Toast (notificación)
function mostrarToast(mensaje) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = mensaje;
>>>>>>> 71de471 (Subiendo semana 01-04)

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
<<<<<<< HEAD
};

// ===============================
// 🌗 ESTADO DEL TEMA
// ===============================

let isDark = false;

// ===============================
// ⚡ EVENT LISTENERS (ARROW)
// ===============================

document.addEventListener('click', (e) => {
  // 📋 Copiar información
  if (e.target.id === 'copyBtn') {
    const text = `
${name}
${description}
Ubicación: ${city}, ${country}
Rating: ${stats.rating}
    `;

    navigator.clipboard.writeText(text);
    showToast('Información copiada ✅');
  }

  // 🌙 Cambiar tema
  if (e.target.id === 'toggleTheme') {
    isDark = !isDark;

    document.body.classList.toggle('dark');
    showToast(isDark ? 'Modo oscuro 🌙' : 'Modo claro ☀️');
  }

  // 👀 Mostrar / ocultar servicios
  if (e.target.id === 'toggleFeatures') {
    const list = document.getElementById('featuresList');

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});

// ===============================
// 🚀 INICIALIZAR APP
// ===============================

renderProperty();
=======
}
>>>>>>> 71de471 (Subiendo semana 01-04)
