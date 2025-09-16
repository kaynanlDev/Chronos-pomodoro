import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span className={styles.cyclesTitle}>Ciclos</span>
      <div className={styles.cyclesPoints}>
        <div className={`${styles.cyclePoint} ${styles.cyclePointWork}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointRest}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointWork}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointRest}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointWork}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointRest}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointWork}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointRest}`}></div>
        <div className={`${styles.cyclePoint} ${styles.cyclePointLong}`}></div>
      </div>
    </div>
  );
}
