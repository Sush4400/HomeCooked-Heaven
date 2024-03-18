import React from 'react';

export default function SubscriptionPlan() {
  return (
    <div>
      <hr />
      <div className="container my-4">
        <h2 className='text-center my-4'>Subscription Plans</h2> 
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center g-4">
          <div className="col">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 sub-text">Monthly Combo</h4>
                <p>Lunch-Dinner for 30 Days</p>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card- sub-text"><sup>₹</sup>3500<small className="text-body-secondary fs-4 fw-light sub-text"><sup>monthly</sup></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li><i className="fa-solid fa-circle-check"></i> Veg and Non-veg options available</li>
                  <hr />
                  <li><i className="fa-solid fa-circle-check"></i> free Home Delivery</li>
                </ul>
                <button type="button" style={{ backgroundColor: 'rgb(255, 115, 0)', color: 'white' }} className="w-75 btn btn-lg">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 sub-text"> Dinner Pack</h4>
                <p>Dinner for 30 Days</p>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card- sub-text"><sup>₹</sup>1600<small className="text-body-secondary fs-4 fw-light sub-text"><sup>monthly</sup></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li><i className="fa-solid fa-circle-check"></i> Veg and Non-veg options available</li>
                  <hr />
                  <li><i className="fa-solid fa-circle-check"></i> free Home Delivery</li>
                </ul>
                <button type="button" style={{ backgroundColor: 'rgb(255, 115, 0)', color: 'white' }} className="w-75 btn btn-lg">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 sub-text">Coroprate pack</h4>
                <p>Lunch for 30 Days</p>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card- sub-text"><sup>₹</sup>2000<small className="text-body-secondary fs-4 fw-light sub-text"><sup>monthly</sup></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li><i className="fa-solid fa-circle-check"></i> Veg and Non-veg options available</li>
                  <hr />
                  <li><i className="fa-solid fa-circle-check"></i> free Home Delivery</li>
                </ul>
                <button type="button" style={{ backgroundColor: 'rgb(255, 115, 0)', color: 'white' }} className="w-75 btn btn-lg">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 sub-text">Monthly Lunch Pack </h4>
                <p> Only Lunch for 30 Days</p>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card- sub-text"><sup>₹</sup>2200<small className="text-body-secondary fs-4 fw-light sub-text"><sup>monthly</sup></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li><i className="fa-solid fa-circle-check"></i> Veg and Non-veg options available</li>
                  <hr />
                  <li><i className="fa-solid fa-circle-check"></i> free Home Delivery</li>
                </ul>
                <button type="button" style={{ backgroundColor: 'rgb(255, 115, 0)', color: 'white' }} className="w-75 btn btn-lg">Subscribe</button>
              </div>
            </div>
          </div>
          {/* Repeat the same structure for other subscription plans */}
        </div>
      </div>
    </div>
  );
}
