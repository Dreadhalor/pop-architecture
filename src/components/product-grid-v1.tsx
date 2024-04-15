import { SyncProductV1 } from '@/trpc';
import { ProductV1, ProductV1Placeholder } from './product-v1';
import { trpc } from '@/trpc/client';

// type Props = {
//   products?: SyncProductV1[];
// };
export const ProductGridV1 = () => {
  const { data: products, isLoading } =
    trpc.productsV1.getSyncProducts.useQuery();

  if (isLoading)
    return (
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductV1Placeholder key={i} />
        ))}
      </div>
    );

  if (!products || products.length === 0) return null;

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductV1 key={product.id} product={product} />
      ))}
    </div>
  );
};
