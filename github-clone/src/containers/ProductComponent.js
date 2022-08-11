import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [showText, setShowText] = useState('');
  const handleClick = (id) => {
    setShowText(id);
  };
  const renderList = products.map((product,index) => {
    const {
      id,
      full_name,
      forks_count,
      open_issues,
      stargazers_count,
    } = product;
    return (
      <div key={id}>
        <h1 style={{ cursor: 'pointer' }} onClick={() => handleClick(index)}>
          {full_name}
        </h1>
        {showText === index && (
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
