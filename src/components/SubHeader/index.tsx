import styles from './subheader.module.scss';

export function SubHeader() {
  return (
    <div className={styles.subheaderContainer}>
      <p>Category 1</p>
      <p>Category 2</p>
      <p>Category 3</p>
      <p>Category 4</p>
      <p>Category 5</p>
      <p>Category 6</p>
    </div>
  );
}