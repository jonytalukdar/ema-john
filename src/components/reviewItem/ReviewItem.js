import React from 'react';

const ReviewItem = (props) => {
  console.log(props);
  const { name, quantity } = props.product;
  return (
    <div>
      <h4 className="product-name">{name}</h4>
      <p>Quantity : {quantity}</p>
    </div>
  );
};

export default ReviewItem;
