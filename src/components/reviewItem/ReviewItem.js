import React from 'react';
import './reviewItem.css';

const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;
  return (
    <div className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>Quantity : {quantity}</p>
      <p>
        <small>$ {price}</small>
      </p>
      <button onClick={() => props.removeProduct(key)} className="main-button">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
