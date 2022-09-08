import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cart }) {
  return (
    <nav className="navbar">
      <Link to="/shopping-cart" className="link-brand">
        Shopping
        <span className="cart">Cart</span>
      </Link>

      <ul className="link-container">
        <li className="link-item">
          <Link to="/shopping-cart">Home</Link>
        </li>
        <li className="link-item">
          <Link to="/shopping-cart/products">Products</Link>
        </li>
        <li className="link-item">
          <Link to="/shopping-cart/about">About</Link>
        </li>
        <li className="link-item cart-link">
          <Link to="/shopping-cart/cart" className="link-cart">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="cart-count">{cart.length}</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
