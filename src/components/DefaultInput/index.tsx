import type React from 'react';
import styles from '../DefaultInput/styles.module.css';

type DefaultInput = {
  id: string;
  labelString: string;
  placeString: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelString,
  placeString,
  ...rest
}: DefaultInput & React.HtmlHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className={styles.inputLabel} htmlFor={id}>
        {labelString}
      </label>
      <input
        className={styles.input}
        type=''
        name=''
        id={id}
        placeholder={placeString}
        {...rest}
      />
    </>
  );
}
