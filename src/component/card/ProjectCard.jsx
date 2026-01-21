import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const ProjectCard = ({ title, link, description, image, isYellowTitle }) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image Container */}
      <div className="relative overflow-hidden rounded-3xl bg-base-100 aspect-4/3 mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />

        {/* View Project Overlay (Optional) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <Link
            to={link}
            target="_blank"
            className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            View Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <h3
          className={`text-2xl font-bold transition-colors ${
            isYellowTitle
              ? "text-primary"
              : "text-base-content group-hover:text-primary"
          }`}
        >
          {title}
        </h3>
        <p className="text-neutral text-sm leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
