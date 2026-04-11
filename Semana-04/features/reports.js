export const getStats = (data) => {
  const total = data.length;

  const avg =
    total === 0
      ? 0
      : Math.round(data.reduce((acc, p) => acc + Number(p.price), 0) / total);

  return { total, avg };
};