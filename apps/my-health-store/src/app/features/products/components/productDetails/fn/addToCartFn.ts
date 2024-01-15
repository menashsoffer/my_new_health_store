import { CartType, ProductRead } from '../../../../../../../../library/index';

export const addToCart = (
  cart: CartType[],
  currentProduct: ProductRead,
): CartType[] => {
  const updatedCart = [...cart];
  const index = updatedCart.findIndex(
    (item) => item[0].id === currentProduct.id,
  );
  if (index === -1) {
    updatedCart.push([currentProduct, 1]);
    return updatedCart;
  } else {
    const updatedItem = updatedCart[index];
    updatedItem[1]++;
    return [
      ...updatedCart.slice(0, index),
      updatedItem,
      ...updatedCart.slice(index + 1),
    ];
  }
};
