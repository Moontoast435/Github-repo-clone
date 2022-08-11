import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRepositories } from '../redux/actions/RepositoryActions';
import RepositoryComponent from './RepositoryComponent';
import RepositoryDetail from './RepositoryDetail';
const RepositoryListing = () => {
  const [username, setUsername] = useState('');
  const repositories = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setRepositories(response.data));
    setUsername('');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search for GitHub User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input_search"
        />

        <button onClick={fetchProducts} className="btn btn-sm btn-primary">
          Search Github
        </button>
        {username && <h3>Lists of repos for {username}</h3>}
        <RepositoryComponent />
      </div>
    </div>
  );
};

export default RepositoryListing;
