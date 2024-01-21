import { CartType } from 'apps/library';

export const addOne = (cart: CartType[], productId: string | undefined) => {
  const itemIndex = cart.findIndex((item) => item.product.id === productId);
  const updatedCart = [...cart];
  updatedCart[itemIndex].quantity++;
  return updatedCart;
};
export const removeOne = (cart: CartType[], productId: string | undefined) => {
  const itemIndex = cart.findIndex((item) => item.product.id === productId);
  const updatedCart = [...cart];
  updatedCart[itemIndex].quantity--;
  return updatedCart;
};
