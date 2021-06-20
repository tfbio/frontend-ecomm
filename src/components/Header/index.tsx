import { SignInButton } from '../SignInButton';
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './header.module.scss';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <div className={styles.headerManager}>
          <SearchBar />
          <a href="">
            <AiOutlineShoppingCart className={styles.icon} />
            Your Cart
          </a>
          <a href="">
            <AiOutlineUserAdd className={styles.icon} />
            Login
          </a>   
        </div>
      </div>
    </header>
  );
}