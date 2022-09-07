import React from 'react';

function CartProduct({ product, removeFromCart, add, sub }) {
  return (
    <div className="cart-item bg-light">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={product.image}
            alt="..."
            className="img-fluid image-width"
            width="150"
          />
          <div>
            <div>
              <strong>{product.name}</strong>
            </div>
            <div>
              <small>
                {product.quantity} x {product.price}
              </small>
            </div>
          </div>
        </div>
        <div>
          <button className="btn" onClick={() => sub(product)}>
            -
          </button>
          <button className="btn" onClick={() => add(product)}>
            +
          </button>
          <button
            className="btn btn-danger px-3 ms-2"
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
