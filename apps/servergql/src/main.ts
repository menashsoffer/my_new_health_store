import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import connectToPG from './connectToDB';
import { initTRPC } from '@trpc/server';
import productsRouter from './productRouter';

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;
const appRouter = router({
  products: productsRouter,
});

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});
server.listen(3000);
server.server.on('listening', () => {
  console.log('server is up and running');

  connectToPG()
    .then(() => {
      console.log('connected to DB');
    })
    .catch((error) => console.error('not connecting to DB', error));
});
server.server.on('error', () => {
  console.log('server is not up');
});

export type AppRouter = typeof appRouter;
