import styles from './header.module.scss'
import { SearchBar } from './SearchBar'
import { CartIcon, FavoritesIcon, LoginIcon } from './Icons'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <div className={styles.headerManager}>
          <SearchBar />
          <CartIcon />
          <FavoritesIcon />
          <LoginIcon />
        </div>
      </div>
    </header>
  );
}

