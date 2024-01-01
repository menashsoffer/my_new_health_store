import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import cors from 'cors';
import { initTRPC } from '@trpc/server';
import { ProductsTypes, db } from './db';
import connectToPG from './connectToDB';
// import { createProductsTable } from './sequelize';

const t = initTRPC.create();

const router = t.router;
const middleware = t.middleware;
const publicProcedure = t.procedure;

const appRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query((opts) => {
      const { input } = opts;
      console.log(input.name);
      return `Hello ${input.name}`;
    }),
  productsList: publicProcedure.query(async () => {
    const products = await db.products.findMany();
    console.log(products);
    return products;
  }),
  addProduct: publicProcedure
    .input(
      z.object({
        product_name: z.string(),
        product_description: z.string(),
        price: z.number(),
        category: z.string(),
        image_src: z.string(),
        image_alt: z.string(),
        product_usage: z.string(),
        ingredients: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      try {
        const addProduct = await db.products.addProduct(input as ProductsTypes);
        console.log('add product is successful', addProduct);
        return addProduct;
      } catch (error) {
        console.log(error);
      }
    }),

  // userById: publicProcedure.input(z.string()).query(async (opts) => {
  //   const { input } = opts;
  //   //      ^?
  //   // Retrieve the user with the given ID
  //   const user = await db.products.findById(input);
  //   return user;
  // }),
  // userCreate: publicProcedure
  //   .input(z.object({ id: z.string(), name: z.string() }))
  //   .mutation(async (opts) => {
  //     const { input } = opts;
  //     const user = await db.user.create(input as UserTypes);
  //     return user;
  //   }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});
// The API will now be listening on port 3000!
server.listen(3000);
server.server.on('listening', () => {
  connectToPG()
    .then(() => {
      console.log('connected to DB');
    })
    .catch((error) => console.error('not connection to DB', error));
});
