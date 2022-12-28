import React from 'react';

const Button = ({ children, onClick, css }) => {
  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
