import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="App">
      <NavBar cartCount={999} />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductInfo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
