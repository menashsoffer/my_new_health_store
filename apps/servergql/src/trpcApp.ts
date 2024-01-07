import productsRouter from './productRouter';
import { router } from './trpcRouter';

export const appRouter = router({
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
