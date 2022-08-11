import React from 'react';
import { useSelector } from 'react-redux';

const RepositoryDetail = () => {
  const repositories = useSelector((state) => state);
  return (
    <div>
      <h1>RepositoryDetail</h1>
    </div>
  );
};

export default RepositoryDetail;
