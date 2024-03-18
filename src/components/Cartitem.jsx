import React from 'react'

export default function Cartitem() {
  return (
    <div>
        <div class="cart-item">
            <div class="row align-items-center">
            <div class="col-md-3">
                <img src="./images/dosa.jpg" alt="Food Image" class="img-fluid food-image"/>
            </div>
            <div class="col-md-3">
                <h3>Food Item Name</h3>
            </div>
            <div class="col-md-3">
                <button class="btn btn-secondary" onclick="decreaseQuantity(this)">-</button>
                <span class="quantity">1</span>
                <button class="btn btn-secondary" onclick="increaseQuantity(this)">+</button>
            </div>
            <div class="col-md-3">
                <h4 class="price">$11.99</h4>
            </div>
            </div>
        </div>
    
    </div>
  )
  
  function decreaseQuantity(button) {
    var quantityElement = button.nextElementSibling;
    var currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
    }
  }
  
  function increaseQuantity(button) {
    var quantityElement = button.previousElementSibling;
    var currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
  }


}
