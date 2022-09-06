import React from 'react';

function ProductCard({ product, details }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343703000"
          alt="product"
        />
      </div>
      <div className="product-details"></div>
    </div>
  );
}

export default ProductCard;
