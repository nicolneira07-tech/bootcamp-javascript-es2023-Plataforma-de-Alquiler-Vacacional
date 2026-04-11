# 🏡 Plataforma de Alquiler Vacacional 

## 📋 Información General

* **Nombre**: Nicol Dayana Neira Lopez 
* **Dominio**: Plataforma de Alquiler Vacacional
* **Tecnologías**: HTML, CSS, JavaScript (ES2023 Modules)

---

## 🎯 Descripción del Proyecto

Aplicación web para la gestión de propiedades de alquiler vacacional que permite administrar alojamientos como villas, apartamentos, casas y fincas.

El sistema implementa una **arquitectura modular moderna con ES2023**, incorporando funcionalidades avanzadas como:

* Gestión completa de propiedades (CRUD)
* Filtros en tiempo real
* Sistema de favoritos
* Reportes dinámicos bajo demanda
* Exportación de datos
* Persistencia en localStorage
* Modo oscuro/claro

---

## 🧱 Arquitectura del Proyecto

El proyecto sigue una estructura modular organizada por responsabilidades:

```
Semana-04/
│
├── index.html
├── styles.css
│
└── starter/
    ├── main.js
    ├── config.js
│
    ├── models/
    ├── services/
    ├── ui/
    ├── features/
    └── utils/
```

### 🔹 Descripción de Módulos

* **models/** → Define las entidades del dominio (Property)
* **services/** → Lógica de negocio y manejo de datos
* **ui/** → Renderizado y eventos del DOM
* **features/** → Funcionalidades avanzadas (lazy loading)
* **utils/** → Funciones reutilizables (tema, helpers)
* **config.js** → Configuración global

---

## ⚙️ Funcionalidades Implementadas

### 🏠 Gestión de Propiedades (CRUD)

* Crear propiedades
* Visualizar listado
* Eliminar propiedades
* Marcar como favoritas ❤️

---

### 🔍 Filtros en Tiempo Real

* Búsqueda por nombre o ubicación
* Filtrado dinámico sin recargar la página

---

### 🌙 Modo Oscuro / Claro

* Cambio de tema dinámico
* Persistencia del tema en localStorage

---

### 📊 Reportes (Dynamic Import)

Se implementa carga bajo demanda utilizando `import()`:

* Total de propiedades
* Promedio de precios

---

### 📁 Exportación de Datos

* Exportación de propiedades en formato CSV
* Descarga automática del archivo

---

### 💾 Persistencia de Datos

* Uso de **localStorage**
* Los datos se mantienen al recargar la página

---

## 🧪 Conceptos ES2023 Aplicados

### 🔹 Destructuring

```javascript
const { name, location, price, category } = data;
```

Aplicado en:

* Parámetros de funciones
* Iteraciones
* Manejo de objetos

---

### 🔹 Módulos ES2023

* Uso de `import` y `export`
* Barrel exports (`index.js`)
* Separación por capas

```javascript
import { addProperty } from '../services/index.js';
```

---

### 🔹 Dynamic Imports

```javascript
const { getStats } = await import('../features/reports.js');
```

Permite:

* Carga eficiente de módulos
* Mejor rendimiento

---

## 🎨 Diseño e Interfaz

* Interfaz moderna tipo tarjetas (cards)
* Animaciones suaves
* Diseño responsive básico
* Experiencia similar a plataformas reales

---

## 🚀 Cómo Ejecutar el Proyecto

1. Abrir el proyecto en VS Code
2. Ejecutar con Live Server
3. Abrir en el navegador

---

## 🏁 Conclusión

Este proyecto demuestra la implementación de una aplicación moderna utilizando:

* Arquitectura modular
* Buenas prácticas de JavaScript
* Separación de responsabilidades
* Uso de ES2023

Se logra una aplicación funcional, escalable y con una experiencia de usuario atractiva.

---

## ⭐ Estado del Proyecto

✅ Completado
🚀 Nivel: 40/100
>>>>>>> 71de471 (Subiendo semana 01-04)
