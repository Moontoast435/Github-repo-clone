import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import ProductDetail from './ProductDetail';
const ProductListing = () => {
  const [username, setUsername] = useState('SampurnaC');
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('Products:', products);

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form> */}
      <h1>ProductListing</h1>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
