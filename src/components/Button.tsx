import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <div className='field'>
      <button {...props}></button>
    </div>
  );
};

export default Button;
