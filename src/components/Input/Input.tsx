import React, { InputHTMLAttributes } from 'react';
import './Input.css';
interface InputProps {
  status: string;
}

const Input: React.FC<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  status,
  ...rest
}) => {
  return (
    <div className={`field field-${status}`}>
      <input {...rest} />
    </div>
  );
};

export default Input;
