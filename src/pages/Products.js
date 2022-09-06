import React from 'react';
import ProductCard from '../components/ProductCard';
import { allProducts as products } from '../data/allProducts';

function Products() {
  return (
    <div className="products">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
