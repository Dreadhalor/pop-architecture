import { ProductGridV1 } from '@/components/product-grid-v1';

export default function Home() {
  return (
    <>
      <div className='text-center pb-6 md:pb-12'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
          All Products
        </h1>
      </div>
      <ProductGridV1 />
    </>
  );
}
