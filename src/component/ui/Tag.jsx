import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="badge md:badge-lg border-base-300 bg-base-300 text-primary text-sm leading-tight w-fit whitespace-nowrap">
      {children}
    </div>
  );
};

export default Tag;
