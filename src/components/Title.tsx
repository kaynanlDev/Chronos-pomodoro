import styles from './Title.module.css';
type TitleProps = {
  children: React.ReactNode;
};

export function Title(props: TitleProps) {
  const { children } = props;
  return (
    <h1 className={styles.head}>
      {props.children} {children}
    </h1>
  );
}
