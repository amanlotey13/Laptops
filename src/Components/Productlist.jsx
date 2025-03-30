import React from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from './Data';

function ProductList() {
  const navigate = useNavigate();

  const viewProductDetail = (product) => {
    // Navigate to the product detail page, passing product ID in the URL
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <div className='bgimg'></div><br />
      <div className="container">
        <div className="row">
          {
            items.map((product) => (
              <div className="col-lg-4 p-2" key={product.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={product.imgSrc} className="card-img-top" style={{ height: '200px' }} alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.Description}</p>
                    <div className='d-flex justify-content-between'>
                      <a href="#" className="btn btn-primary">INR: {product.price}</a>
                      <button
                        className="btn btn-warning"
                        onClick={() => viewProductDetail(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default ProductList;
