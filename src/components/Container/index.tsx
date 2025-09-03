import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
