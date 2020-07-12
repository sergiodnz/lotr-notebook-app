import React from 'react';
import { useLocation } from 'react-router-dom';

const Page = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="page-title">
        <h2>{pathname}</h2>
      </div>
      {children}
    </div>
  );
};

export default Page;
