import { HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';
type avaliableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<avaliableTheme>('dark');

  function handleThemeClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();
    console.log('clicou');
  }
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
        <SunIcon />
      </a>
    </nav>
  );
}
