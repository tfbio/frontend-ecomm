import styles from './variantCard.module.scss';

// vai precisar receber parâmetros
export function TrendingCategoryCard() {
  return (
    <div className={styles.trendingCategoryContainer}>
      <a href="">
        <h2>Trending Category</h2>
        <img className={styles.cardImg} src="/images/category-trending.png" alt="trending image" />
      </a>
     </div>
  )
}