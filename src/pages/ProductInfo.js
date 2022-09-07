import React from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import { allProducts as products } from '../data/allProducts';

function ProductInfo({ addToCart }) {
  const id = useParams().id;
  return (
    // <div>{product && <ProductCard product={product} details={true} />}</div>
    <>
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
    </>
  );
}

export default ProductInfo;
