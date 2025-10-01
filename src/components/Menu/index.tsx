import {
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
type avaliableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<avaliableTheme>(() => {
    const storageTheme = localStorage.getItem('theme') as avaliableTheme;
    return storageTheme === 'light' ? 'light' : 'dark';
  });

  const themeIcons = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <nav className={styles.menu} title='Home' aria-label='Voltar para o início'>
      <a href='#' className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Histórico'
        aria-label='Ver histórico'
      >
        <TimerIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Configurações'
        aria-label='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Mudar tema'
        aria-label='Mudar tema'
        onClick={handleThemeClick}
      >
        {themeIcons[theme]}
      </a>
    </nav>
  );
}
