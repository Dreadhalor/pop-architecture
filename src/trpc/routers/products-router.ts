import { PrintfulProduct } from '@/types/types';
import { publicProcedure, router } from '../trpc';
import { printful } from '@/lib/printful-client-v2';
import { formatVariantName } from '@/lib/format-variant-name';
import { shuffle } from 'lodash';
import { components, paths } from '@/types/api';

type GetSyncProductsResponse =
  paths['/v2/sync-products']['get']['responses']['200']['content']['application/json'];
// type SyncProductResponse = GetSyncProductsResponse['data'];

async function getProducts() {
  const res = (await printful.get('sync-products')) as GetSyncProductsResponse;
  console.log('res', res);
  const products = res.data || [];
  // what do we need? { id, name, variants }

  return products;

  // const allProducts = await Promise.all(
  //   productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  // );

  // const products: PrintfulProduct[] = allProducts.map(
  //   ({ result: { sync_product, sync_variants } }) => ({
  //     ...sync_product,
  //     variants: sync_variants.map(({ name, ...variant }) => ({
  //       name: formatVariantName(name),
  //       ...variant,
  //     })),
  //   })
  // );

  // return shuffle(products);
}

export const productsRouter = router({
  getSyncProducts: publicProcedure.query(async () => {
    const res = (await printful.get(
      'sync-products'
    )) as GetSyncProductsResponse;
    const products = res.data || [];
    return products;
  }),
});

// export type SyncProducts = typeof productsRouter.getSyncProducts.;
