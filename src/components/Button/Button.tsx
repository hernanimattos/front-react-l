import React, { ButtonHTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Button.css';

interface ButtonProps {
  loading?: boolean;
}

const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ children, loading, ...rest }) => {
  return (
    <div className='field'>
      <button {...rest}>
        {loading ? <FaSpinner className='icon icon-spin' /> : ''}
        {children}
      </button>
    </div>
  );
};

export default Button;
