import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import { api } from '../../services/api';
import { ProductInfo } from '../../types';
import Head from 'next/head';


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
      <p>{`Pagina com listagem de produtos da categoria ${category}`}</p>
    </>
  ) 
}

