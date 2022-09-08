import React from 'react';
import { Link } from 'react-router-dom';
import video from '../data/homepage-video.mp4';

function Home() {
  return (
    <div className="home">
      <video className="bg-video" playsInline autoPlay muted loop>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className="home-text">
        <h2 className="home-title">
          A LEGEND IS <span className="reborn">REBORN</span>
        </h2>
        <button className="btn shop">
          <Link to="/shopping-cart/products">Shop Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
