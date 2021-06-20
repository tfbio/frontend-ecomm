import styles from './productCard.module.scss';
import { FaSearchPlus } from 'react-icons/fa';

// vai precisar receber parâmetros
export function ProductCard() {
  return (
    <li className={styles.productCard}>
      <p className={styles.category}>Category</p>
      <p className={styles.name}>Product Name</p>
      <img className={styles.cardImg} src="/images/product-placeholder.png" alt="product image" />
      <div>
        <p className={styles.price}>$1191.90</p>
        <p className={styles.descountPrice}>$990.90</p>        
      </div>
      <a href="">
        <FaSearchPlus />
      </a>
    </li>
  )
}