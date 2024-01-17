import { publicProcedure, router } from './trpcRouter';
import { z } from 'zod';
import { db } from './dal';
import { checkToken } from './token/checkToken';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
  productsList: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const products = await db.products.findMany();
    return products;
  }),
  categoriesList: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const products = await db.categories.findMany();
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
      if (!opts.ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
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
      if (!opts.ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
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
