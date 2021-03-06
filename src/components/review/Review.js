import React, { useEffect, useState } from 'react';
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productkey) => {
    const newCart = cart.filter((pd) => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
  };

  useEffect(() => {
    // cart data
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
