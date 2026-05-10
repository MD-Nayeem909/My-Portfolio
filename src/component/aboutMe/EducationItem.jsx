import React from "react";
import Tag from "../ui/Tag";
import { ExternalLink } from "lucide-react";

const EducationItem = ({ title, institute, date, certificateUrl }) => {
  return (
    <div className="flex justify-between items-start border border-base-300 bg-base-100 p-4 md:p-8">
      <div>
        <h4 className="font-medium md:text-3xl mb-2">{title}</h4>
        <p className="text-md text-neutral mb-2">{institute}</p>
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-secondary transition-colors font-medium mt-1"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        )}
      </div>
      <Tag>{date}</Tag>
    </div>
  );
};

export default EducationItem;
