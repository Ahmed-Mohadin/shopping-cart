import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <h2 className="home-title">BEST ONLINE STORE OF THE YEAR</h2>
        <p className="home-paragraph">
          Lorem ipsum dolor<br></br>sit amet consectetur<br></br>adipisicing
        </p>
        <button className="btn shop">
          <Link to="/products">Shop now</Link>
        </button>
      </div>
      <div className="home-image">
        <img
          src="https://file.removal.ai/preview/tmp-63171c96a2285.png"
          alt="it-prduct"
        />
      </div>
    </div>
  );
}

export default Home;
