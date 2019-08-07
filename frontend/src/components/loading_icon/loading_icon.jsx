import React from 'react';

const LoadingIcon = () => (
  <div className="loading-icon-container">
    <img src={process.env.PUBLIC_URL + `/images/loading.svg`} alt="loading" />
  </div>
);

export default LoadingIcon;
