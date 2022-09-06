import React from 'react';
import CartProduct from './CartProduct';
import { useState } from 'react';

function ShoppingCart({ totalCartItems }) {
  const [shoppingCart, setProducts] = useState([
    {
      id: 1,
      name: 'Iphone 1',
      image:
        'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-red-back.png?v=5',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, natus eaque dicta dignissimos distinctio adipisci!',
      short: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 3000,
    },
  ]);
  const empty = (
    <div className="p-2 d-flex justify-content-center align-items-center">
      Your cart is empty
    </div>
  );
  return (
    <div className="my-cart">
      {shoppingCart.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
      {!shoppingCart.length && empty}
      <div className="dropdown-divider"></div>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total: <span>${totalCartItems}</span>
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
