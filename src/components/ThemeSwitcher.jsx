import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // Получаем сохраненную тему из localStorage или используем системные настройки
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Проверяем системные настройки
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Применяем тему при загрузке и при изменении
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      className="theme-switch" 
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;