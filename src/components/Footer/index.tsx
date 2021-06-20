import styles from './footer.module.scss';
import {AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram} from 'react-icons/ai';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.generalInfo}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <p>
          500, 4th Local st. Northen Chicago<br/>
          IN 47893, US<br/>
          Phone: 0800-1234-000000<br/>
          Email: someemail@gmail.com
        </p>
        <p>Copyright 2021 © E-Commerce. All rights reserved.</p>
      </section>
      <section className={styles.categories}>
        <h2>Popular Categories</h2>
        <a href="">Category 1</a>
        <a href="">Category 2</a>
        <a href="">Category 3</a>
        <a href="">Category 4</a>
        <a href="">Category 5</a>
        <a href="">Category 6</a>
      </section>
      <section className={styles.categories}>
        <h2>About Us</h2>
        <a href="">Contact Us</a>
        <a href="">Delivery Information</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms &amp; Conditions</a>
        <a href="">FAQs</a>
        <a href="">Product Support</a>
      </section>
      <section className={styles.followUs}>
        <h2>Follow Us</h2>
          <a href="">
            <AiFillFacebook />
            Facebook
          </a>
          <a href="">
            <AiOutlineInstagram />
            Instagram
          </a>
          <a href="">
            <AiFillTwitterSquare />
            Twitter
          </a>
      </section>
    </footer>
  );
}