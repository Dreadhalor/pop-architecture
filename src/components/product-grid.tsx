import { AppRouter, SyncProduct } from '@/trpc';
import { Productv2 } from './product-v2';

type Props = {
  products?: SyncProduct[];
};
const ProductGrid = ({ products }: Props) => {
  if (!products || products.length === 0) return null;

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <Productv2 key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
