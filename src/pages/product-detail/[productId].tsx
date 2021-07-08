import { api } from '../../services/api';
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import Head from 'next/head';
import { ProductInfo } from '../../types';
import styles from '../../styles/pages.module.scss';


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { data } = await api.get<ProductInfo>(`products/${context.params.productId}`)
  
  return {
    props: {
      info: data,
    },
  }
}

export default function ProductDetails(info: ProductInfo) {    
  return(
    <>
      <Head>
        <title>Details | E-Comm</title>
      </Head>
      <main className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <section className={styles.mainInfo}>
            <img src="" alt="" />
            <div></div>
          </section>
          <section className={styles.extraInfo}>
            <p>info a mais</p>
          </section>
        </div>
      </main>
    </>
  ) 
}
