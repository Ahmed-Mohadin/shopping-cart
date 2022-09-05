import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import './styles/style.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar cartCount={999} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
