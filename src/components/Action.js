import React from 'react';

const Action = ({ icon, action, show }) => {
  return (
    show && (
      <span>
        <button onClick={action}>
          <i className={`fa ${icon}`}></i>
        </button>
      </span>
    )
  );
};

export default Action;
