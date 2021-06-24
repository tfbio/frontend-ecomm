import styles from './subheader.module.scss';
import Link from 'next/link';

export function SubHeader() {
  return (
    <div className={styles.subheaderContainer}>
      <Link href="/categories/produtos">
        <a>
          Sports
        </a>
      </Link>
      <p>Electronics</p>
      <p>Category 3</p>
      <p>Category 4</p>
      <p>Category 5</p>
      <p>Category 6</p>
    </div>
  );
}