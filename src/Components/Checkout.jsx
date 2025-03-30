// src/Checkout.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, totalPrice } = location.state || {};

  // State variables for form fields
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [state, setState] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); // Default payment method

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navigate to the confirm payment page with relevant details
    navigate('/confirm-payment', {
      state: {
        customerName,
        customerEmail,
        address,
        contactNumber,
        postalAddress,
        state,
        paymentMethod,
        product,
        quantity,
        totalPrice
      }
    });
  };

  if (!product) return <div>No product details available</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={product.imgSrc} className="img-fluid" alt={product.title} />
          <h1>{product.title}</h1>
          <h4>{product.Description}</h4>
          <h4>Price: {product.price}</h4>
          <h4>Quantity: {quantity}</h4>
          <h4>Total Price: {totalPrice.toLocaleString()}</h4>
          <div class="rating">
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
  <span class="star">★</span>
</div>
        </div>
        <div className="col-lg-6">
          <h2>Customer Details</h2>
          <form onSubmit={handleSubmit}>
            {/* Existing form fields */}
            <div className="mb-3">
              <label htmlFor="customerName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="customerEmail"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postalAddress" className="form-label">Postal Address</label>
              <input
                type="text"
                className="form-control"
                id="postalAddress"
                value={postalAddress}
                onChange={(e) => setPostalAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="cashOnDelivery">
                    Cash on Delivery
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="creditCard">
                    Credit Card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="upi">
                    UPI
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Confirm Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
