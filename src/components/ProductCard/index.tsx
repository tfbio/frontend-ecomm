import styles from './productCard.module.scss';
import { AiOutlineHeart} from 'react-icons/ai';

// vai precisar receber parâmetros
export function ProductCard() {
  return (
    <li className={styles.productCard}>
      <div className={styles.content}>
        <p className={styles.name}>Product Name</p>
        <img className={styles.cardImg} src="/images/product-placeholder.png" alt="product image" />
       
        <div className={styles.productInfo}>
          <div className={styles.priceTab}>
            <p className={styles.descountPrice}>$9.90</p>  
            <p className={styles.price}>$11.90</p>
          </div>
          <button type="button">
            <AiOutlineHeart />
          </button>
        </div> 
      </div>
      <div className={styles.viewMore}>
        <a href="">View Product</a> 
      </div>
    </li>
  )
}
