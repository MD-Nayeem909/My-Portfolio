import React from "react";
import Tag from "../ui/Tag";

const ExperienceItem = ({ role, company, description, date }) => {
  return (
    <div className="flex justify-between items-start border border-base-300 bg-base-100 md:p-8 p-4">
      <div className="w-full">
        <div className="flex md:items-center justify-between w-full mb-4">
          <h4 className="font-medium md:text-3xl mb-2 md:mb-0">{role}</h4>
          <Tag className="">{date}</Tag>
        </div>
        <p className="text-md text-neutral mb-2">{company}</p>
        <p className="text-sm text-neutral leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
