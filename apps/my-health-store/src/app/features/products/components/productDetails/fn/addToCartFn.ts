import { CartType, ProductRead } from '../../../../../../../../library/index';

export const addToCart = (
  cart: CartType[],
  currentProduct: ProductRead,
): CartType[] => {
  const updatedCart = [...cart];
  const index = updatedCart.findIndex(
    (item) => item.product.id === currentProduct.id,
  );
  if (index === -1) {
    updatedCart.push({ product: currentProduct, quantity: 1 });
    return updatedCart;
  } else {
    const updatedItem = updatedCart[index];
    updatedItem.quantity++;
    return [
      ...updatedCart.slice(0, index),
      updatedItem,
      ...updatedCart.slice(index + 1),
    ];
  }
};
