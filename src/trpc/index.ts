import { productsRouter } from './routers/products-router';
import { router } from './trpc';

export const appRouter = router({
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
