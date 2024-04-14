'use client';

import ProductGrid from '@/components/product-grid';
import { trpc } from '@/trpc/client';

export default function Home() {
  const { data: products } = trpc.products.getSyncProducts.useQuery();

  return (
    <>
      <div className='text-center pb-6 md:pb-12'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
          All Products
        </h1>
      </div>
      <ProductGrid products={products} />
    </>
  );
}
