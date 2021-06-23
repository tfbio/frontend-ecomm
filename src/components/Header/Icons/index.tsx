import styles from './icon.module.scss';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai';
import { useState } from 'react';


export function CartIcon() {
  const [cartItems, setCartItems] = useState(0)

  return (
    cartItems > 0 ? 
    (
      <a className={styles.iconBody} href="">
      <p>{cartItems}</p>
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