import styles from './search.module.scss';
import { BiSearchAlt } from 'react-icons/bi';

export function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <BiSearchAlt />
      <input type="text" placeholder="Search here"/>
    </div>
  );
}