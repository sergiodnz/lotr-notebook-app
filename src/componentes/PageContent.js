import React from 'react';
import { useLocation } from 'react-router-dom';

const PageContent = ({ name, children }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="page-content">
        <h3>notebook app / {name}</h3>
        <h5>pathname: {pathname}</h5>
      </div>
      {children}
    </div>
  );
};

export default PageContent;
