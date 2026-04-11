export const exportToCSV = (data) => {
  const rows = data.map(({ name, location, price, category }) =>
    `${name},${location},${price},${category}`
  );

  const csv = "Nombre,Ubicación,Precio,Categoría\n" + rows.join("\n");

  const blob = new Blob([csv]);
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = "propiedades.csv";
  a.click();
};