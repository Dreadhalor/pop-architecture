import { productsRouterV2 } from './routers/products-router-v2';
import { productsRouterV1 } from './routers/products-router-v1';
import { router } from './trpc';
import type { inferRouterOutputs } from '@trpc/server';

export const appRouter = router({
  productsV2: productsRouterV2,
  productsV1: productsRouterV1,
});

export type AppRouter = typeof appRouter;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type SyncProductV2 =
  RouterOutput['productsV2']['getSyncProducts'][number];
export type SyncProductV1 =
  RouterOutput['productsV1']['getSyncProducts'][number];
