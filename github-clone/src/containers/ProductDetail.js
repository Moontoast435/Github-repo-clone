import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
