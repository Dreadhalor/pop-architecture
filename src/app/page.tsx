'use client';

import { ProductGridV1 } from '@/components/product-grid-v1';
// import { ProductGrid } from '@/components/product-grid';
import { trpc } from '@/trpc/client';

export default function Home() {
  const { data: products } = trpc.productsV1.getSyncProducts.useQuery();
  // const { data: products } = trpc.productsV2.getSyncProducts.useQuery();

  return (
    <>
      <div className='text-center pb-6 md:pb-12'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
          All Products
        </h1>
      </div>
      <ProductGridV1 products={products} />
      {/* <ProductGrid products={products} /> */}
    </>
  );
}
