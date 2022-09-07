import React from 'react';
import CartProduct from './CartProduct';

function ShoppingCart({ shoppingCart, removeFromCart, add, sub, total }) {
  const empty = (
    <div className="p-2 d-flex justify-content-center align-items-center">
      Your cart is empty
    </div>
  );
  return (
    <div className="my-cart">
      {shoppingCart.map((product) => (
        <CartProduct
          product={product}
          key={product.id}
          removeFromCart={removeFromCart}
          add={add}
          sub={sub}
        />
      ))}
      {!shoppingCart.length && empty}
      <div className="dropdown-divider"></div>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total: <span>${total}</span>
          </div>
          <small className="text-muted">
            <i className="fas fa-shipping-fast"></i>: Free Shipping
          </small>
        </div>
        <button className="btn btn-success">To Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
