import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <h1> {productKey}Product details comming soon</h1>
    </div>
  );
};

export default ProductDetails;
