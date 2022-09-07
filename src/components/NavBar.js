import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCart from './cart/ShoppingCart';

function NavBar({ cart, removeFromCart, add, sub, total }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        <Link className="navbar-brand font-weight-bold" to="/">
          ShoppingCart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-2 d-flex navbar-links">
              <NavLink
                exact="true"
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                exact="true"
                className="nav-link"
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                exact="true"
                className="nav-link"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-dark text-white px-3 input-group-text"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fas fa-shopping-cart px-1"></i>
                  <span className="border rounded bg-light text-dark px-2 mx-1">
                    {cart.length}
                  </span>
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          My Cart
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <ShoppingCart
                          shoppingCart={cart}
                          removeFromCart={removeFromCart}
                          add={add}
                          sub={sub}
                          total={total}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
