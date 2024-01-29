import { useAtom, useAtomValue } from 'jotai';
import {
  categoriesListAtom,
  productsListAtom,
} from '../../products/atom/productsStore';
import { token } from '../../users/atom/userStore';
import { trpc } from '../../../../trpc/index';
import { useEffect } from 'react';

export const useSetData = () => {
  const [productsFromDb, setProducts] = useAtom(productsListAtom);
  const [categoriesFromDb, setCategories] = useAtom(categoriesListAtom);
  const currentToken = useAtomValue(token);

  useEffect(() => {
    if (currentToken) {
      const getProducts = async () => {
        const products = await trpc.productsList.query();
        if (products.length > 0) setProducts(products);
      };
      const getCategories = async () => {
        const categories = await trpc.categoriesList.query();
        if (categories.length > 0) setCategories(categories);
      };
      if (categoriesFromDb.length === 0) getCategories();
      if (productsFromDb.length === 0) getProducts();
    }
  }, [productsFromDb, categoriesFromDb, currentToken]);
};
