import React, { AllHTMLAttributes } from 'react';
import './Toast.css';

interface ToastProps {
  message?: string;
  status?: string;
  show?: boolean;
}

const Toast: React.FC<ToastProps> = ({ status, message, show }) => {
  if (!show) return null;
  return (
    <div className={`toast toast-${status}`}>
      <h3 className={`toast-message__${status}`}> {message}</h3>
    </div>
  );
};

export default Toast;
