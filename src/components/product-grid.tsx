import Product from './product';

const ProductGrid = ({ products }) => {
  console.log('products', products);
  if (!products || products.length === 0) return null;

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
