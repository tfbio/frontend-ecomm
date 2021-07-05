import styles from './subheader.module.scss';
import Link from 'next/link';

export function SubHeader() {
  return (
    <div className={styles.subheaderContainer}>
      <Link href="products/sports">
        <a>
          Sports
        </a>
      </Link>
      <Link href="products/electronics">
        <a>
          Electronics
        </a>
      </Link>
      <Link href="products/accessories">
        <a>
          Accessories
        </a>
      </Link>
      <Link href="products/smartphones-tablets">
        <a>
          Smartphones &amp; Tablets
        </a>
      </Link>
      <Link href="products/computers">
        <a>
          Computers
        </a>
      </Link>
      <Link href="products/instruments">
        <a>
          Musical Instruments
        </a>
      </Link>
    </div>
  );
}