import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./card/ProjectCard";

const FeaturedWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "FastParcel - Enterprise Logistics & Dynamic Marketplace",
      link: "https://fastparcel-next-app.vercel.app/",
      githubLink: "https://github.com/MD-Nayeem909/fast-parcel",
      description:
        "A professional, role-based parcel delivery and management application featuring a robust notification system, real-time status updates, and a dedicated dashboard.",
      image:
        "https://i.ibb.co.com/394QBzcM/Fast-Parcel.png",
      category: "MERN Stack",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "ENTRIA Contest Platform",
      link: "https://b12-a11-assignment-entria-client-om1r-4sc6v0jip.vercel.app/",
      githubLink: "https://github.com/MD-Nayeem909/Entria_Client",
      description:
        "A full-stack contest management platform where users can participate in contests, creators can organize contests, and admins can monitor reports and activities.",
      image:
        "https://i.ibb.co.com/MyD70tKB/Entria.png?auto=format&fit=crop&q=80&w=800",
      isYellowTitle: true,
      category: "MERN Stack",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"]
    },
    {
      title: "Food Lover",
      link: "https://b12-a10-food-lover-client.vercel.app/",
      githubLink: "https://github.com/MD-Nayeem909/B12A10-FoodLover-client",
      description:
        "A responsive and dynamic food delivery web application offering seamless task management and user authentication features.",
      image:
        "https://i.ibb.co.com/RGM7k2nN/Food-Lover4.png?auto=format&fit=crop&q=80&w=800",
      category: "Frontend",
      techStack: ["React.js", "Tailwind CSS", "MongoDB", "JWT"]
    },
    {
      title: "Branding Identity Design",
      link: "https://www.behance.net/mdnayeemude0b6",
      description:
        "Building clean, user-friendly Logos that validate ideas quickly and deliver real impact.",
      image:
        "https://i.ibb.co.com/qLwZ7dFK/Concept-5.jpg?auto=format&fit=crop&q=80&w=800",
      category: "Design",
      techStack: ["Illustrator", "Photoshop", "Figma"]
    },
  ];

  const categories = ["All", "MERN Stack", "Frontend", "Design"];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="text-base-content py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary">✦</span>
              <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl satoshi font-bold leading-tight">
              Showcasing My Work for <br className="hidden md:block" /> Your Inspiration
            </h2>
            <p className="text-neutral max-w-xl text-lg leading-relaxed">
              Discover a curated showcase of digital creativity — from responsive web applications to full-stack MERN platforms and impactful brand identity designs.
            </p>
          </div>

          <button className="bg-primary text-primary-content px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary transition-all self-start md:self-center whitespace-nowrap shadow-lg shadow-primary/20">
            Explore all Projects <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-base-content text-base-100 shadow-md"
                  : "bg-base-200 text-neutral hover:bg-base-300 hover:text-base-content"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
