import { createContext, ReactNode, useContext, useState } from 'react';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Product[];
  addProductToCart: (product: Product) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ product, newAmount }: UpdateProductAmount) => void;
  clearCart: () => void;
}

interface UpdateProductAmount {
  product: Product;
  newAmount: number;
}


const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

  // Codigo Placeholder
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: 'produtim1',
      unformattedPrice: 10.90,
      amount: 2,
      imageUrl: 'a image url'
    },
    {
      id: 2,
      name: 'produtim2',
      unformattedPrice: 100.90,
      amount: 5,
      imageUrl: 'a image url'
    },
  ])

  // Codigo Placeholder
  const addProductToCart = async (product: Product) => {
    const updatedCart = [...cart]
    updatedCart.push(product)
   
    setCart(updatedCart)
  }

  // Codigo Placeholder
  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId)
   
    setCart(updatedCart)
  }

  // Codigo Placeholder
  const updateProductAmount = async ({ product, newAmount }: UpdateProductAmount) => {
    const updatedCart = [...cart]
    const targetProduct = updatedCart.find(p => p.id === product.id)
    targetProduct.amount = newAmount

    setCart(updatedCart)
  }

  // Codigo Placeholder
  const clearCart = () => {}

  

  const contextValues = {
    cart, addProductToCart, removeProduct, updateProductAmount, clearCart
  }
  
  return (
    <CartContext.Provider value={contextValues} >
      {children}
    </CartContext.Provider>
  );

}


export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}