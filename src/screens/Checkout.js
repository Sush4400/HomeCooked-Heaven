import React, { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'creditCard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your checkout logic here
    console.log(formData);
    alert('Checkout successful!');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="zip" className="form-label">Zip Code</label>
            <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
          <select className="form-select" id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
}
