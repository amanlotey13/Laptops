import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConfirmPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
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
  } = location.state || {};

  // State variables for payment details
  const [creditCard, setCreditCard] = useState('');
  const [upi, setUpi] = useState('');
  const [creditCardError, setCreditCardError] = useState('');
  const [upiError, setUpiError] = useState('');

  // Credit Card Number Validation
  const validateCreditCard = (number) => {
    const regex = /^(\d{13,19})$/;
    return regex.test(number);
  };

  // UPI ID Validation
  const validateUpi = (id) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(upi|paytm|okaxis|phonepe|gpay|amazonpay)$/;
    return regex.test(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate payment details based on the payment method
    if (paymentMethod === 'creditCard') {
      if (!validateCreditCard(creditCard)) {
        setCreditCardError('Invalid credit card number. It should be 13-19 digits long.');
        isValid = false;
      } else {
        setCreditCardError('');
      }
    }

    if (paymentMethod === 'upi') {
      if (!validateUpi(upi)) {
        setUpiError('Invalid UPI ID. Please enter a valid UPI ID.');
        isValid = false;
      } else {
        setUpiError('');
      }
    }

    if (isValid) {
      // Retrieve cart items from localStorage
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      const cartItems = cartData.items || [];

      // Find if product is already in cart
      const existingProductIndex = cartItems.findIndex(item => item.product.title === product.title);

      if (existingProductIndex > -1) {
        // Update quantity if product already exists
        cartItems[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to cart
        const productWithPriceAsNumber = { ...product, price: Number(product.price) };
        cartItems.push({ product: productWithPriceAsNumber, quantity });
      }

      // Store customer details in localStorage
      const customerDetails = {
        name: customerName,
        email: customerEmail,
        address,
        contactNumber,
        postalAddress,
        state
      };

      localStorage.setItem('cart', JSON.stringify({ items: cartItems, customer: customerDetails }));

      // Display alert and navigate to cart page
      alert(`Payment Details Submitted. Thank you for your order, ${customerName}!`);
      navigate('/Home');
    }
  };

  return (
    <div className="container">
      <h2>Confirm Payment</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p><strong>Product:</strong> {product.title}</p>
        <p><strong>Description:</strong> {product.description}</p> {/* Ensure 'description' matches the property */}
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Total Price:</strong> ${totalPrice.toLocaleString()}</p>
      </div>
      
      <div className="customer-payment-container">
        <div className="customer-details">
          <h3>Customer Details</h3>
          <p><strong>Name:</strong> {customerName}</p>
          <p><strong>Email:</strong> {customerEmail}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Contact Number:</strong> {contactNumber}</p>
          <p><strong>Postal Address:</strong> {postalAddress}</p>
          <p><strong>State:</strong> {state}</p>
        </div>
        <div className="payment-details">
          <form onSubmit={handleSubmit}>
            {paymentMethod === 'creditCard' && (
              <div className="mb-3">
                <label htmlFor="creditCardNumber" className="form-label">Credit Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="creditCardNumber"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  required
                />
                {creditCardError && <div className="text-danger">{creditCardError}</div>}
              </div>
            )}
            {paymentMethod === 'upi' && (
              <div className="mb-3">
                <label htmlFor="upiId" className="form-label">UPI ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="upiId"
                  value={upi}
                  onChange={(e) => setUpi(e.target.value)}
                  required
                />
                {upiError && <div className="text-danger">{upiError}</div>}
              </div>
            )}
            <button type="submit" className="btn btn-primary">Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPayment;
