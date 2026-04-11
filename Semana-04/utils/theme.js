export const toggleTheme = () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

export const loadTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.body.classList.add('dark');
};