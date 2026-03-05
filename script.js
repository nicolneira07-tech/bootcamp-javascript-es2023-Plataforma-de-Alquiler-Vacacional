// Datos del dominio
const platformData = {
name: "Plataforma de Alquiler Vacacional",
code: "VAC-001",
description: "Sistema digital que conecta anfitriones con turistas para alquiler de alojamientos temporales.",
location: {
city: "Bogotá",
country: "Colombia"
},

services: [
{ name: "Verificación de licencias", level: 90 },
{ name: "Gestión de reservas", level: 95 },
{ name: "Pagos seguros", level: 92 },
{ name: "Soporte a usuarios", level: 85 }
],

stats: {
users: 12000,
properties: 850,
rating: 4.7
}
};


// Destructuring
const {
name,
description,
code,
location:{city,country},
services,
stats
} = platformData;


// Render información
document.getElementById("title").textContent = name;
document.getElementById("description").textContent = description;

document.getElementById("info").innerHTML = `
Código: ${code} <br>
Ubicación: ${city}, ${country}
`;


// Render servicios
const servicesList = document.getElementById("services");

services.forEach(service=>{
const li = document.createElement("li");
li.textContent = `${service.name} - Nivel ${service.level}%`;
servicesList.appendChild(li);
});


// Estadísticas con reduce
const avgService = services.reduce((acc,s)=> acc + s.level,0)/services.length;

document.getElementById("stats").innerHTML = `
Usuarios: ${stats.users}<br>
Propiedades: ${stats.properties}<br>
Rating: ${stats.rating}<br>
Promedio de servicios: ${avgService.toFixed(1)}%
`;


// Toggle tema
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
showToast("Tema cambiado");
});


// Copiar información
document.getElementById("copyBtn").addEventListener("click",()=>{

const text = `
${name}
${description}
Ubicación: ${city}, ${country}
`;

navigator.clipboard.writeText(text);

showToast("Información copiada");
});


// Mostrar / ocultar servicios
document.getElementById("toggleBtn").addEventListener("click",()=>{
servicesList.classList.toggle("hidden");
});


// Toast
const showToast = (message)=>{

const toast = document.getElementById("toast");

toast.textContent = message;
toast.style.display = "block";

setTimeout(()=>{
toast.style.display = "none";
},2000);

};