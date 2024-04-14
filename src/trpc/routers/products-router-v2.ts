import { publicProcedure, router } from '../trpc';
import { printful } from '@/lib/printful-client-v2';
import { paths } from '@/types/api';

type GetSyncProductsResponseV2 =
  paths['/v2/sync-products']['get']['responses']['200']['content']['application/json'];

export const productsRouterV2 = router({
  getSyncProducts: publicProcedure.query(async () => {
    const res = (await printful.get(
      'sync-products'
    )) as GetSyncProductsResponseV2;
    const products = res.data || [];
    return products;
  }),
});
