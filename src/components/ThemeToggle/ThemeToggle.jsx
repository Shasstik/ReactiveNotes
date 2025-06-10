import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="theme-toggle">
      <button 
        className={`theme-option ${theme === 'light' ? 'active' : ''}`}
        onClick={() => setTheme('light')}
        aria-label="Светлая тема"
      >
        ☀️
      </button>
      
      <button 
        className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => setTheme('dark')}
        aria-label="Темная тема"
      >
        🌙
      </button>
      
      <button 
        className={`theme-option ${theme === 'system' ? 'active' : ''}`}
        onClick={() => setTheme('system')}
        aria-label="Системная тема"
      >
        💻
      </button>
    </div>
  );
};

export default ThemeToggle;