import { formatVariantName } from '@/lib/format-variant-name';
import { publicProcedure, router } from '../trpc';
import { printful } from '@/lib/printful-client-v1';
import { paths } from '@/types/api-v1';

type GetSyncProductsResponseV1 =
  paths['/sync/products']['get']['responses']['200']['content']['application/json'];
type getSyncProductResponseV1 =
  paths['/sync/products/{id}']['get']['responses']['200']['content']['application/json'];

export const productsRouterV1 = router({
  getSyncProducts: publicProcedure.query(async () => {
    const res = (await printful.get(
      'sync/products'
    )) as GetSyncProductsResponseV1;
    const result = res.result || [];

    const allProducts = await Promise.all(
      result.map(async ({ id }) => {
        const res = (await printful.get(
          `sync/products/${id}`
        )) as getSyncProductResponseV1;
        return res.result || {};
      })
    );

    const products = allProducts.map(
      ({ sync_product, sync_variants = [] }) => ({
        ...sync_product,
        variants: sync_variants.map(({ name = '', ...variant }) => ({
          name: formatVariantName(name),
          ...variant,
        })),
      })
    );

    return products;
  }),
});
