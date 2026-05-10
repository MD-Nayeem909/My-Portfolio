import OrbitingSkills from "./OrbitingSkills";
import Button from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../layouts/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full z-10">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200 border border-base-300 text-sm font-medium text-base-content mb-8 shadow-sm hover:border-primary/30 transition-colors cursor-default"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              Available for Freelance
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-base-content mb-2 leading-tight tracking-tight satoshi"
            >
              MOHAMMAD <span className="text-primary">NAYEEM</span>
            </motion.h1>

            {/* Title Gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 satoshi bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-neutral max-w-xl mb-10 leading-relaxed"
            >
              Passionate about crafting beautiful, functional, and user-centered digital experiences. I transform complex problems into elegant web solutions using modern technologies.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="font-bold flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
              >
                Start a Project <ArrowUpRight size={20} />
              </Button>
              <a
                href="#projects"
                className="font-bold flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-xl border-2 border-base-300 text-base-content hover:bg-base-200 hover:border-base-content/20 transition-all"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right Visual Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            <OrbitingSkills />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
