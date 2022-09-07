import React from 'react';

function CartProduct({ product, removeFromCart, add, sub }) {
  return (
    <div className="cart-product">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <strong>{product.name}</strong>
        <br></br>
        <small>
          {product.quantity} x {product.price}
        </small>
        <div className="btn-product">
          <button className="btn btn-sub" onClick={() => sub(product)}>
            -
          </button>
          <button className="btn btn-add" onClick={() => add(product)}>
            +
          </button>
          <button
            className="btn btn-remove"
            onClick={() => removeFromCart(product)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
