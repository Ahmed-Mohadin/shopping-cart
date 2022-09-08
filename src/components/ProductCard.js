import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, details, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-text">
          {details ? (
            <p className="product-desc">{product.desc}</p>
          ) : (
            <p className="product-short">{product.short}</p>
          )}
          <p className="product-price">
            Price: $<span className="price">{product.price}</span>
          </p>
        </div>
        <div className={`product-btn ${details ? 'product-btns' : null}`}>
          <button className="btn btn-add" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
          {!details && (
            <Link
              className="btn btn-info"
              to={`/shopping-cart/products/${product.id}`}
            >
              Read More<i className="fa-solid fa-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
