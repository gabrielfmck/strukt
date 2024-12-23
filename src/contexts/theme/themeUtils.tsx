// src\contexts\theme\themeUtils.tsx
type Theme = 'light' | 'dark';

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) return savedTheme;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const updateThemeClass = (theme: Theme) => {
  const root = window.document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
};