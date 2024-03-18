import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};

  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (newItem) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex((cartItem) => cartItem.id === newItem.id);
  
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedCart = [...prevCartItems];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        return updatedCart;
      } else {
        // If the item is not in the cart, add it with a quantity of 0
        return [...prevCartItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Add the initial item to the cart when the component mounts
  useEffect(() => {
  if (item) {
    addToCart({ ...item, quantity: 1 });
  }
}, [item]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleIncrementQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    const selectedItem = updatedCart.find((item) => item.id === itemId);
    selectedItem.quantity += 1;
    setCartItems(updatedCart);
  };

  const handleDecrementQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    const selectedItem = updatedCart.find((item) => item.id === itemId);
    if (selectedItem.quantity > 1) {
      selectedItem.quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For demonstration purposes, I'm just navigating to a checkout page
    navigate('/checkout');
  };

  const total = cartItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);

  return (
   
    <>
    
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Cart</h1>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={cartItem.image} className="img-fluid rounded-start" alt={cartItem.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{cartItem.name}</h5>
                  <p className="card-text">Price: ₹{cartItem.price}</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleDecrementQuantity(cartItem.id)}>-</button>
                    <p className="card-text mx-2">{cartItem.quantity}</p>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleIncrementQuantity(cartItem.id)}>+</button>
                  </div>
                  <p className="card-text">Total: ₹{cartItem.price * cartItem.quantity}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(cartItem.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <h4>Total: ₹{total}</h4>
          <button className="btn btn-primary mx-2" onClick={handleCheckout}>Checkout</button>
          <button className="btn btn-secondary mx-2" onClick={() => navigate(-1)}>Back to Shopping</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
