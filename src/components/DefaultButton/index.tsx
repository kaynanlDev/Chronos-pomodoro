import type React from 'react';
import styles from '../DefaultButton/styles.module.css';

type DefaultButton = {
  icon: React.ReactNode;
  color?: 'red' | 'green';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButton & React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`}>{icon}</button>
    </>
  );
}
