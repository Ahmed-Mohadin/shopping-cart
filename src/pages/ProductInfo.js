import React from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import { allProducts as products } from '../data/allProducts';

function ProductInfo({ addToCart }) {
  const id = useParams().id;
  return (
    <div className="product-card-info">
      {products.map((product) => {
        if (product.id === id) {
          return (
            <ProductCard
              key={product.id}
              product={product}
              details={true}
              addToCart={addToCart}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default ProductInfo;
