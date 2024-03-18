import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Foodcard({imgUrl, itemName}) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      name: itemName,
      price: 60.00,
      image: imgUrl,
      quantity: 1
    };
    
    // Navigate to the cart page with item information
    navigate('/cart', { state: { item: item } });
  };

  return (
    <div className="card m-3" style={{ width: '15rem', height: '320px' }}>
      <div style={{ width: "200px", height: "200px", overflow: "hidden" }}>
        <img src={imgUrl} className="card-img-top" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="..." />
      </div>
      <div className="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="card-title fs-2">{itemName}</p>
          <p className="card-rating mt-3" style={{  }}>VEG
            <img src="" style={{ height: "25px" }} alt="" />
          </p>
        </div>
        <div className="card-price" style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="fs-5"><i className="fa fa-indian-rupee-sign"></i>60.00</p>
          <button onClick={handleAddToCart} className="btn" style={{ height: "40px", width: "110px", backgroundColor: "rgb(243, 195, 74)" }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
