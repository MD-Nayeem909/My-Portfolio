import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, image, isYellowTitle }) => {
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
          <div className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Project <ArrowUpRight size={18} />
          </div>
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
        <p className="text-neutral text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const projects = [
    {
      title: "Website Redesign",
      description:
        "Revamping outdated layouts into modern, responsive websites that improve usability and engagement.",
      image:
        "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Branding Identity Design",
      description:
        "Crafting unique brand identities that reflect values, connect with audiences, and stand out.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Creative Hub Website",
      description:
        "Designing an engaging platform that brings ideas, content, and communities together seamlessly.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mobile App MVP Designs",
      description:
        "Building clean, user-friendly MVPs that validate ideas quickly and deliver real impact.",
      image:
        "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
      isYellowTitle: true,
    },
  ];

  return (
    <section id="projects" className=" text-base-content py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary">✦</span>
              <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl satoshi font-bold leading-tight">
              Showcasing My Work for <br /> Your Inspiration
            </h2>
            <p className="text-neutral max-w-xl text-lg leading-relaxed">
              Discover a curated showcase of digital creativity by Mohammad
              Nayeem — a web developer and brand identity designer passionate
              about crafting innovative UI/UX experiences and impactful web
              projects.
            </p>
          </div>

          <button className="bg-primary text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-all self-start md:self-center whitespace-nowrap">
            Explore all Projects <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
