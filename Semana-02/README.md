# Ficha de Plataforma de Alquiler Vacacional

## 📋 Información
- **Nombre**: Nicol Dayana Neira Lopez 
- **Dominio Asignado**: Plataforma de Alquiler Vacacional  
- **Entidad Principal**: Propiedad de alquiler (casas/apartamentos)

---

## 🎯 Descripción
Esta aplicación web permite gestionar propiedades dentro de una plataforma de alquiler vacacional.

El sistema permite:
- Agregar nuevas propiedades
- Editar información de propiedades
- Eliminar propiedades
- Marcar propiedades como favoritas ❤️
- Activar o desactivar disponibilidad
- Buscar propiedades por nombre
- Filtrar por estado (disponible/no disponible)
- Visualizar estadísticas en tiempo real

Además, cuenta con:
- Persistencia de datos usando LocalStorage
- Interfaz moderna con diseño responsive
- Modo claro 🌞 y modo oscuro 🌙

---

## 📚 Conceptos ES2023 Aplicados
- [x] Variables con `let` y `const`
- [x] Template literals
- [x] Arrow functions
- [x] Destructuring
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)

---

## 🧠 Lógica Implementada

### 🏠 Modelo de datos
Cada propiedad se representa como un objeto:

```js
{
  id: Date.now(),
  name: "Casa en la playa",
  location: "Cartagena",
  price: 120,
  active: true,
  favorite: false,
  rating: "4.5"
}
```
## ⚙️ Funcionalidades principales
### ➕ Crear propiedad

Se agregan nuevas propiedades usando spread operator:

```js
state.items.push({
  id: Date.now(),
  active: true,
  favorite: false,
  rating: (Math.random()*5).toFixed(1),
  ...data
});

```

### ❌ Eliminar propiedad

Uso de filter() para mantener inmutabilidad:
```js
state.items = state.items.filter(i => i.id !== id);
```
### ❤️ Favoritos

Uso de map() para actualizar estado:
```js
state.items = state.items.map(i =>
  i.id === id ? {...i, favorite: !i.favorite} : i
);
```
### 🔄 Disponibilidad

Cambio de estado activo/inactivo:
```js
state.items = state.items.map(i =>
  i.id === id ? {...i, active: !i.active} : i
);
```
### ✏️ Edición

Se implementa mediante un modal que permite actualizar los datos:
```js
{...i, name: editName.value, location: editLocation.value, price: editPrice.value}
```

### 🔍 Búsqueda y filtros

Se aplican filtros combinados:
```js
res = res.filter(i =>
  i.name.toLowerCase().includes(state.search.toLowerCase())
);
```
### 📊 Estadísticas

Se calculan dinámicamente:

- Total de propiedades
- Propiedades favoritas
- Propiedades disponibles

### 🎨 Interfaz de Usuario

La interfaz incluye:

- 🏡 Header con botón de modo oscuro
- 📝 Formulario de registro
- 🔍 Buscador en tiempo real
- 🎛️ Filtro por estado
- 🪪 Cards dinámicas con imágenes
- 📊 Estadísticas
- ✏️ Modal de edición
- 🌙 Modo Oscuro / Claro

Se implementa mediante:
```js
document.body.classList.toggle("light");
```
Incluye cambio de emoji dinámico:

- ☀️ → modo claro
- 🌙 → modo oscuro
  
### 💾 Persistencia de Datos

Uso de LocalStorage:
```js
localStorage.setItem("airbnb", JSON.stringify(state.items));
```
Permite mantener los datos incluso al recargar la página.

##🚀 Cómo Ejecutar
1. Abrir el archivo index.html
2. Usar la aplicación desde el navegador
3. Probar:
   - Crear propiedades
   - Editar
   - Eliminar
   - Buscar
   - Cambiar modo oscuro
   
## 📸 Screenshots
## 🌞 Modo Claro
## 🌙 Modo Oscuro

### 🎯 Autoevaluación
- Funcionalidad: 100%
- Código ES2023: 95%
- Código Limpio: 95%
- Adaptación al Dominio: 100%

## 💡 Conclusión

El proyecto implementa una aplicación completa de gestión de propiedades, aplicando JavaScript moderno, manipulación del DOM y persistencia de datos.

Se logró una solución funcional, organizada y visualmente atractiva, alineada al dominio de plataformas de alquiler vacacional, similar a aplicaciones reales como Airbnb.
