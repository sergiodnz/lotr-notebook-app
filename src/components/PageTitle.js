import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
  const { pathname } = useLocation();
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <h2>{pathname}</h2>
    </div>
  );
};

export default PageTitle;
