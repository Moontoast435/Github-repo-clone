import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, stargazers_count, open_issues, forks, name } = product;
    console.log(product);
    return (
      <div key={id}>
        <h1>Name of Repo: {name}</h1>
         <p>Number of forks: {forks}</p>
        <p>Stargazers: {stargazers_count}</p>
        <p>Issues: {open_issues}</p> 
      </div>
    );
  });
  // const { id, title } = products[0];
  return <div>{renderList}</div>;
};

export default ProductComponent;
