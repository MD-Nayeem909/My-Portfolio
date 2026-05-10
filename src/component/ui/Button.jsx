import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button 
      {...props} 
      className={`bg-primary text-primary-content px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-all text-lg whitespace-nowrap cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
