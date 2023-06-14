export interface Product {
  id?: string | number;
  media?: ProductMedia;
  title: string;
  description: string;
  price: ProductPrice;
}

interface ProductMedia {
  cover: string;
  images?: string[];
}

interface ProductPrice {
  standard: string | number;
  promotional?: string | number | null;
  currency: string;
}
