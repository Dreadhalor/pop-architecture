import { productsRouter } from './routers/products-router';
import { router } from './trpc';
import type { inferRouterOutputs } from '@trpc/server';

export const appRouter = router({
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type SyncProduct = RouterOutput['products']['getSyncProducts'][number];
