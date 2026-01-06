import React from "react";
import Tag from "../ui/Tag";

const EducationItem = ({ title, institute, date }) => {
  return (
    <div className="flex justify-between items-start border border-base-300 bg-base-100 p-4 md:p-8">
      <div>
        <h4 className="font-medium md:text-3xl mb-2">{title}</h4>
        <p className="text-md text-neutral mb-2">{institute}</p>
      </div>
      <Tag>{date}</Tag>
    </div>
  );
};

export default EducationItem;
