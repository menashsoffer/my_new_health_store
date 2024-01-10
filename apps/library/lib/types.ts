export type ProductCreate = {
  product_name: string;
  product_description: string;
  price: number;
  category: string;
  image_src: string;
  image_alt: string;
  product_usage: string;
  ingredients: string;
};

export type ProductRead = {
  id: string;
  product_name: string;
  product_description: string;
  price: number;
  category: string;
  image_src: string;
  image_alt: string;
  product_usage: string;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
};
