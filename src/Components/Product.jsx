import React from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from './Data';


function Product() {
  const navigate = useNavigate();

  const goToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className='bgimg'></div><br />
      <div className="container">
        <div className="row">
          {
            items.map((product) => (
              <div className="col-lg-4 p-2" key={product.id}> {/* Make sure each product has a unique id */}
                <div className="card" style={{ width: '18rem' }}>
                  <img src={product.imgSrc} className="card-img-top" style={{ height: '200px' }} alt={product.title} />
                  <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.Description}</p>
                     <div className='d-flex justify-content-between'>
                      <a href="#" className="btn btn-primary">INR: {product.price}</a>
                      <button
                        className="btn2 btn2-warning"
                        onClick={() => goToProductDetail(product.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div class="rating">
  <span class="star" >★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
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

export default Product;
