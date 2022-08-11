import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RepositoryComponent = () => {
  const repositories = useSelector(
    (state) => state.allRepositories.repositories
  );
  const [showText, setShowText] = useState('');
  const handleText = (id) => {
    console.log('clicked');
    setShowText(id);
  };
  const renderList = repositories.map((repository, index) => {
    const {
      id,
      name,
      full_name,
      forks_count,
      open_issues,
      stargazers_count,
    } = repository;
    console.log(repository);
    return (
      <div className="container mt-3" key={id}>
        <div className="card">
          <i>
            <h5 style={{ cursor: 'pointer' }} onClick={() => {handleText(index)}}>
              {full_name}
            </h5>
          </i>
        </div>
        {showText === index && (
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{name}</h4>
              <p class="card-text">
                Forks Count: {forks_count} <br></br> Open Issues: {open_issues}
              </p>
              <p class="card-text">Total Stars: {stargazers_count}</p>
            </div>
          </div>
        )}
      </div>
    );
  });
  return <div>{renderList}</div>;
};

export default RepositoryComponent;
