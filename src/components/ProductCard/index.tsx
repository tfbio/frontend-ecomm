import styles from './productCard.module.scss';
import { AiOutlineHeart} from 'react-icons/ai';
import { Product } from '../../types';

interface props {
  product: Product;
}

export function ProductCard({ product }: props) {

  return (
    <li className={styles.productCard}>
      <div className={styles.content}>
        <p className={styles.name}>{product.name}</p>
        <img className={styles.cardImg} src={product.imageUrl} alt="product image" />
        <div className={styles.productInfo}>
          <div className={styles.priceTab}>
            <p className={styles.discountPrice}>{product.discountPrice}</p>  
            <p className={styles.price}>{product.formattedPrice}</p>
          </div>
          <button type="button">
            <AiOutlineHeart />
          </button>
        </div> 
      </div>
      <div className={styles.viewMore}>
        <a href={`http://localhost:3000/product-detail/${product.id}`}>View Product</a> 
      </div>
    </li>
  )
}
