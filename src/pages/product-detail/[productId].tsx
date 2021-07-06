import { api } from '../../services/api';
import { GetServerSideProps, GetServerSidePropsContext} from 'next'
import { ProductInfo } from '../../types';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { data } = await api.get<ProductInfo>(`products/${context.params.productId}`)
  
  return {
    props: {
      info: data,
    },
  }
}

export default function ProductDetails(info: ProductInfo) {    
  return <p>Página de um único produto</p> 
}
