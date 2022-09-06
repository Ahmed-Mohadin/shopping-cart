import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, details }) {
  return (
    <div className="col">
      <div className="card h-100 p-3">
        {details && <h1 className="text-center mt-4">{product.name}</h1>}
        <img src={product.image} alt="..." className="card-img-top" />
        <div className="card-body">
          {!details && <h5 className="card-title">{product.name}</h5>}
          <div className="card-text">
            {details ? <p>{product.desc}</p> : <p>{product.short}</p>}
            <p className="h5">
              Price: $<span className="text-danger">{product.price}</span>
            </p>
          </div>
          <div
            className={`row row-cols-2 ${!details && 'row-cols-lg-2'} g-2 mt-3`}
          >
            <div className="col">
              <button
                className="btn btn-primary btn-block"
                onClick={() => console.log('Added to cart')}
              >
                Add To Cart
              </button>
            </div>

            {!details && (
              <div className="col">
                <Link
                  className="btn btn-info btn-block float-end"
                  to={`/products/${product.id}`}
                >
                  Read more<i className="fas fa-arrow-right ps-2"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
