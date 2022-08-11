import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RepositoryComponent = () => {
  const repositories = useSelector(
    (state) => state.allRepositories.repositories
  );
  const [showText, setShowText] = useState(false);
  const handleText = () => {
    console.log('clicked');
    setShowText(!showText);
  };
  const renderList = repositories.map((repository, index) => {
    const {
      id,
      title,
      price,
      category,
      image,
      name,
      full_name,
      forks_count,
      open_issues,
      stargazers_count,
    } = repository;
    console.log(repository);
    return (
      <div className="container mt-3" key={index}>
        <div className="card">
          <i>
            <h5 style={{ cursor: 'pointer' }} onClick={handleText}>
              {full_name}
            </h5>
          </i>
        </div>
        {showText && (
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
