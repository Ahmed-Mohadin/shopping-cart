import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="link-brand">
        Shopping
        <span className="cart">Cart</span>
      </Link>

      <ul className="link-container">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="link-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="link-item">
          <Link to="/about">About</Link>
        </li>
        <li className="link-item cart-link">
          <Link to="/shopping-cart" className="link-cart">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/shopping-cart" className="link-cart">
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
