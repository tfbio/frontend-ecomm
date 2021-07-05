export interface ProductInfo {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  unformattedPrice: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  formattedPrice: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  amount: number;
  formattedPrice: string;
}



