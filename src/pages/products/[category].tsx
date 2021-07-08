import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import { api } from '../../services/api';
import { ProductInfo } from '../../types';
import Head from 'next/head';
import styles from '../../styles/pages.module.scss';


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { data } = await api.get<ProductInfo[]>(`products?category=${context.params.category}`)
  
  return {
    props: {
      list: data,
    },
  }
}


export default function Products(list: ProductInfo[]) {  
  const router = useRouter()
  const { category } = router.query    

  return (
    <>
      <Head>
        <title>Shopping | E-Comm</title>
      </Head>
      <main className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <p>Detalhes de um produto -----------------------------------------------------------------------------------------------------------------
            ------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
      </main>
    </>
  ) 
}

