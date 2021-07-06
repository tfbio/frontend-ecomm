import styles from './subheader.module.scss';
import Link from 'next/link';

export function SubHeader() {
  return (
    <div className={styles.subheaderContainer}>
      <Link href="http://localhost:3000/products/sports">
        <a>
          Sports
        </a>
      </Link>
      <Link href="http://localhost:3000/products/electronics">
        <a>
          Electronics
        </a>
      </Link>
      <Link href="http://localhost:3000/products/accessories">
        <a>
          Accessories
        </a>
      </Link>
      <Link href="http://localhost:3000/products/smartphones-tablets">
        <a>
          Smartphones &amp; Tablets
        </a>
      </Link>
      <Link href="http://localhost:3000/products/computers">
        <a>
          Computers
        </a>
      </Link>
      <Link href="http://localhost:3000/products/instruments">
        <a>
          Musical Instruments
        </a>
      </Link>
    </div>
  );
}