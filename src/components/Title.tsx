import styles from './Title.module.css';

export function Title(props) {
  console.log(props);
  return (
    <h1 className={styles.head}>
      {props.children} {props.num}
    </h1>
  );
}
