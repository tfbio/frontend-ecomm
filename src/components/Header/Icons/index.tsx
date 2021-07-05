import styles from './icon.module.scss';
import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai';
import { useCart } from '../../../contexts/cartContext';


export function CartIcon() {
  const { cart } = useCart()    
  const cartItems = cart.length

  return (
    cartItems > 0 ? 
    (
      <a className={styles.iconBody} href="">
      <p data-testid="cart-items">{cartItems}</p>
      <AiOutlineShoppingCart className={styles.icon} />
      </a>
    ) : 
    (
      <a className={styles.iconBody} href="">
        <AiOutlineShoppingCart className={styles.icon} />
      </a> 
    )
  );
}


export function FavoritesIcon() {
  const [favoriteItems, setFavoriteItems] = useState(1)

  return (
    <a className={styles.iconBody} href="">
      <AiOutlineHeart className={styles.icon} />
    </a> 
  );
}


export function LoginIcon() {
  const [userLogged, setUserLogged] = useState(true)

  return (
    userLogged === true ? 
    (
      <a className={styles.iconBody} href="">
        <AiOutlineUserAdd className={styles.icon} />
        Login
      </a>  
    ) : 
    (
      <a className={styles.cartIcon} href="">
        <AiOutlineUserAdd className={styles.icon} />
      </a> 
    )
  );
}