export interface ProductInfo {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  unformattedPrice: number;
  hasDiscount: boolean;
  discountPrice?: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  hasDiscount: boolean;
  formattedPrice: string;
  discountPrice?: string;
  description?: string;
}

export interface ProductInCart {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  hasDiscount: boolean;
  amount: number;
  formattedPrice: string;
  discountPrice?: string;
  description?: string;
}



