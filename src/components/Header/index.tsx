import styles from './header.module.scss'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { CartIcon, FavoritesIcon, LoginIcon } from './Icons'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
          </a>
        </Link>
        <div className={styles.headerManager}>
          <SearchBar />
          <CartIcon data-testid="cart-icon"/>
          <FavoritesIcon data-testid="fav"/>
          <LoginIcon />
        </div>
      </div>
    </header>
  );
}

