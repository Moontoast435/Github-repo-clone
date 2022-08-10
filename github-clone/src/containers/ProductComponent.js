import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, category, image, full_name } = product;
    console.log(product);
    return (
      <div key={id}>
        <h1>{full_name}</h1>
        {/* <p>{price}</p>
        <p>{category}</p>
        <img src={image}></img> */}
      </div>
    );
  });
  // const { id, title } = products[0];
  return <div>{renderList}</div>;
};

export default ProductComponent;
