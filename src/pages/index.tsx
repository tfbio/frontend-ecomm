import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ProductCard } from '../components/ProductCard';
import { TrendingCategoryCard } from '../components/ProductCard/VariantCard';
import styles from '../styles/home.module.scss';

interface HomeProps {
  product: {
    productId: string;
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | E-Commerce</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.trending}>
            <TrendingCategoryCard />
            <ul className={styles.trendingList}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ul>
          </section>
          <section className={styles.test}>
            <h1>Top Searches</h1>
            <ul className={styles.test}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ul>
          </section>
          <section className={styles.test}>
            <h1>On Discount</h1>
            <ul className={styles.test}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ul>
          </section>
        </div>
      </main>
    </> 
  )
}
/*
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J1AORD4Sw0yz5qZaaBUba7R')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'CAD'
    }).format(price.unit_amount/100),
  }
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24
  }
}
*/