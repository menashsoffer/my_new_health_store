import { publicProcedure, router } from './trpcRouter';
import { z } from 'zod';
import { db } from './dal';

export const appRouter = router({
  productsList: publicProcedure.query(async () => {
    const products = await db.products.findMany();
    return products;
  }),
  addProduct: publicProcedure
    .input(
      z.object({
        product_name: z.string(),
        product_description: z.string(),
        price: z.number(),
        categoryId: z.number(),
        image_src: z.string().url(),
        image_alt: z.string(),
        product_usage: z.string(),
        ingredients: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const {
        categoryId,
        image_alt,
        image_src,
        ingredients,
        price,
        product_description,
        product_name,
        product_usage,
      } = opts.input;
      try {
        const addProduct = await db.products.addProduct({
          categoryId,
          image_alt,
          image_src,
          ingredients,
          price,
          product_description,
          product_name,
          product_usage,
        });
        console.log('add product is successful', addProduct);
        return addProduct;
      } catch (error) {
        console.log(error);
      }
    }),
  categoriesList: publicProcedure.query(async () => {
    const products = await db.categories.findMany();
    return products;
  }),
  addCategory: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        image_src: z.string().url(),
      }),
    )
    .mutation(async (opts) => {
      const { description, image_src, name } = opts.input;
      try {
        const addCategory = await db.categories.addCategory({
          description,
          image_src,
          name,
        });
        console.log('add product is successful', addCategory);
        return addCategory;
      } catch (error) {
        console.log(error);
      }
    }),
});

export type AppRouter = typeof appRouter;
