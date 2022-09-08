import React from 'react';
import CartProduct from './CartProduct';

function ShoppingCart({
  shoppingCart,
  removeFromCart,
  incQuantity,
  decQuantity,
  totalPrice,
}) {
  const empty = <div className="empty">Your cart is empty</div>;
  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {shoppingCart.map((product) => (
          <CartProduct
            product={product}
            key={product.id}
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))}
        {!shoppingCart.length && empty}
      </div>
      <div className="cart-price">
        {shoppingCart.length === 0 ? null : (
          <>
            <div>
              <div className="total-price">
                Total: <span className="total">${totalPrice}</span>
              </div>
              <small className="free-shipping">
                <i className="fas fa-shipping-fast"></i>: Free Shipping
              </small>
            </div>
            <button className="btn btn-checkout">To Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
