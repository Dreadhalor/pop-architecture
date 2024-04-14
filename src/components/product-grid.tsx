import { SyncProductV2 } from '@/trpc';
import { ProductV2 } from './product-v2';

type Props = {
  products?: SyncProductV2[];
};
export const ProductGrid = ({ products }: Props) => {
  if (!products || products.length === 0) return null;

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductV2 key={product.id} product={product} />
      ))}
    </div>
  );
};
