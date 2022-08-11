import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [showText, setShowText] = useState(false);
  const yo = () => {
    console.log('clicked');
    setShowText(!showText);
  };
  const renderList = products.map((product, index) => {
    const {
      id,
      title,
      price,
      category,
      image,
      full_name,
      forks_count,
      open_issues,
      stargazers_count,
    } = product;
    console.log(product);
    return (
      <div key={index}>
        <h1 style={{ cursor: 'pointer' }} onClick={yo}>
          {full_name}
        </h1>
        {showText && (
          <div>
            Forks Count: {forks_count} <br></br> Open Issues: {open_issues}
            <br />
            Total Stars: {stargazers_count}
          </div>
        )}
      </div>
    );
  });
  return <div>{renderList}</div>;
};

export default ProductComponent;
