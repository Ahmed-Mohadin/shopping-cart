import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Footer from './components/Footer';
import './styles/style.css';
import ShoppingCart from './components/cart/ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    sumOfPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const addItem = (item) => {
    const findItem = cart.some((product) => product.id === item.id);
    if (!findItem) {
      setCart([...cart, item]);
      sumOfPrice();
    } else add(item);
  };

  const add = (item) => {
    const newState = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(newState);
    sumOfPrice();
  };

  const sub = (item) => {
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(checkSub(newCart));
  };

  const checkSub = (newCart) => {
    const fixedCart = newCart.filter((product) => product.quantity !== 0);
    sumOfPrice();
    return fixedCart;
  };

  const removeItem = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart([...newCart]);
    sumOfPrice();
  };

  const sumOfPrice = () => {
    let newSum = 0;
    cart.forEach((product) => {
      newSum += product.price * product.quantity;
    });
    setTotalPrice(newSum);
  };

  return (
    <div className="App">
      <NavBar
        cart={cart}
        removeFromCart={removeItem}
        add={add}
        sub={sub}
        total={totalPrice}
      />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products addToCart={addItem} />} />
          <Route
            path="/products/:id"
            element={<ProductInfo addToCart={addItem} />}
          />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                shoppingCart={cart}
                removeFromCart={removeItem}
                add={add}
                sub={sub}
                total={totalPrice}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
