import React, { FormHTMLAttributes } from 'react';

interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormHTMLAttributes<HTMLFormElement> & FormProps> = ({
  children,
  handleSubmit,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
};

export default Form;
