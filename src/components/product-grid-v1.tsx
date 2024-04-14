import { SyncProductV1 } from '@/trpc';
import { ProductV1 } from './product-v1';

type Props = {
  products?: SyncProductV1[];
};
export const ProductGridV1 = ({ products }: Props) => {
  if (!products || products.length === 0) return null;

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductV1 key={product.id} product={product} />
      ))}
    </div>
  );
};
