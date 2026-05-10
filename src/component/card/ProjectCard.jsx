import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router";

const ProjectCard = ({ title, link, githubLink, description, image, isYellowTitle, techStack }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-base-100 rounded-3xl border border-base-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.15)] transition-all duration-500 overflow-hidden">
      {/* Project Image Container */}
      <div className="relative overflow-hidden bg-base-200 aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* View Project Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
          <Link
            to={link}
            target="_blank"
            className="bg-primary text-primary-content px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Live Demo <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3
            className={`text-2xl font-bold transition-colors ${
              isYellowTitle
                ? "text-primary"
                : "text-base-content group-hover:text-primary"
            }`}
          >
            {title}
          </h3>
          {githubLink && (
            <Link
              to={githubLink}
              target="_blank"
              className="p-2 bg-base-200 rounded-full text-base-content hover:bg-base-300 hover:text-primary transition-colors flex-shrink-0"
              title="View Source on GitHub"
            >
              <Github size={20} />
            </Link>
          )}
        </div>
        
        <p className="text-neutral text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tech Stack Badges */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-base-300">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-1 bg-base-200 text-base-content/80 rounded-md border border-base-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
