import React from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./card/ProjectCard";
const FeaturedWork = () => {
  const projects = [
    {
      title: "ENTRIA Website Redesign",
      link: "https://b12-a11-assignment-entria-client-om1r-4sc6v0jip.vercel.app/",
      description:
        "A full-stack contest management platform where users can participate in contests, creators can organize contests, and admins can monitor reports and activities.",
      image:
        "https://i.ibb.co.com/MyD70tKB/Entria.png?auto=format&fit=crop&q=80&w=800",
      isYellowTitle: true,
    },
    {
      title: "Food Lover",
      link: "https://b12-a10-food-lover-client.vercel.app/",
      description:
        "Crafting unique brand identities that reflect values, connect with audiences, and stand out.",
      image:
        "https://i.ibb.co.com/RGM7k2nN/Food-Lover4.png?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "FastParcel - Enterprise Logistics & Dynamic Marketplace",
      link: "https://fastparcel-next-app.vercel.app/",
      description:
        "A professional, role-based parcel delivery and management application built with **Next.js**, **MongoDB**, and **Tailwind CSS**. This project features a robust notification system, real-time status updates, and a dedicated dashboard for Admins, Agents, and Customers.",
      image:
        "https://i.ibb.co.com/394QBzcM/Fast-Parcel.png",
    },
    {
      title: "Branding Identity Design",
      link: "/projects/mobile-app-mvp-designs",
      description:
        "Building clean, user-friendly Logos that validate ideas quickly and deliver real impact.",
      image:
        "https://i.ibb.co.com/qLwZ7dFK/Concept-5.jpg?auto=format&fit=crop&q=80&w=800",
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
