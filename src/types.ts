export interface ProductInfo {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  unformattedPrice: number;
  discountPrice?: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  formattedPrice: string;
  discountPrice?: string;
  description?: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  amount: number;
  formattedPrice: string;
  discountPrice?: string;
  description?: string;
}



