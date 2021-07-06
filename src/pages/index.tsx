import { GetServerSideProps } from 'next'
import { Product } from '../types';
import Head from 'next/head';
import { ProductCard } from '../components/ProductCard';
import { TrendingCategoryCard } from '../components/ProductCard/VariantCard';
import styles from '../styles/home.module.scss';
import { api } from '../services/api';

interface props {
  info: Product;
}

export default function Home({ info }: props) {
  const product = {...info}

  return (
    <>
      <Head>
        <title>Home | E-Comm</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.trending}>
            <TrendingCategoryCard />
            <ul className={styles.trendingList}>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
            </ul>
          </section>
          <section className={styles.test}>
            <h1>Top Searches</h1>
            <ul className={styles.test}>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
            </ul>
          </section>
          <section className={styles.test}>
            <h1>On Discount</h1>
            <ul className={styles.test}>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
              <ProductCard product={product}/>
            </ul>
          </section>
        </div>
      </main>
    </> 
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<Product>(`products/79898484688679`)
  
  return {
    props: {
      info: data
    },
  }
}
