import React from 'react';
import ProductCard from '../components/ProductCard';
import { allProducts as products } from '../data/allProducts';

function Products({ addToCart }) {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
