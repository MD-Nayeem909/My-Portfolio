import React from "react";
import { ArrowUpRight, Facebook, Linkedin, X } from "lucide-react";
import Button from "./ui/Button";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LiveStatus from "./liveStatus/LiveStatus";

const Footer = () => {
  return (
    <footer className="bg-black text-base-content pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Upper Section: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary">✦</span>
              <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                Got a project?
              </span>
            </div>
            <h2 className="text-5xl font-bold leading-tight max-w-2xl">
              Surround yourself with an expert
            </h2>
          </div>

          <Button className="">
            Start a Project Now <ArrowUpRight size={22} />
          </Button>
        </div>

        {/* Middle Section: Navigation & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-base-300 pb-12 mb-8 gap-10">
          <div className="flex flex-col gap-6">
            {/* Main Links */}
            <nav className="flex flex-wrap gap-8 text-lg">
              <a href="#" className="text-primary font-medium">
                Home
              </a>
              <a
                href="#about"
                className="text-neutral hover:text-white transition-colors"
              >
                About Me
              </a>
              <a
                href="#services"
                className="text-neutral hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-neutral hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#support"
                className="text-neutral hover:text-white transition-colors"
              >
                Support
              </a>
            </nav>

            {/* Secondary Links */}
            <nav className="flex flex-wrap gap-6 text-sm text-neutral uppercase tracking-widest">
              <a
                href="/assets/NAYEEM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Resume Download
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instructions
              </a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/S.D.MD.Nayeem/"
              className="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center border border-base-300 hover:bg-base-200 transition-all"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-nayeem98/"
              className="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center border border-base-300 hover:bg-base-200 transition-all"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://x.com/md_nayeem98"
              className="w-12 h-12 rounded-full bg-base-100 flex items-center justify-center border border-base-300 hover:bg-base-200 transition-all"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral text-sm gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-base-100 font-bold text-xs">N</span>
            </div>
            <span className="text-base-content font-bold text-xl tracking-tight">
              MOHAMMAD_NAYEEM
            </span>
          </div>

          <div className="text-center">
            ©2025 MD. NAYEEM All rights reserved.
          </div>
          <LiveStatus />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
