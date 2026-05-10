import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router";

const ResumePage = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume_Mohammad_Nayeem_Uddin.pdf";
    link.download = "Resume_Mohammad_Nayeem_Uddin.pdf";
    link.click();
  };
  return (
    <div className="min-h-screen bg-base-100 text-base-content satoshi py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-base-300 pb-12 mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              MD. NAYEEM UDDIN
            </h1>
            <p className="text-primary text-xl font-medium tracking-wide">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-neutral text-sm">
              <Link
                to="mailto:mdnayeemuddin909@gmail.com"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail size={16} /> mdnayeemuddin909@gmail.com
              </Link>
              <span className="flex items-center gap-2">
                <Phone size={16} /> +880-1518-966-045
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Chittagong, Bangladesh
              </span>
            </div>
          </div>
          <button
            onClick={handleDownloadResume}
            className="btn md:btn-lg lg:btn-xl bg-base-content text-base-100 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary transition-all"
          >
            Download CV <Download size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Skills & Education */}
          <div className="space-y-12">
            {/* Skills From Image_877b82 */}
            <section>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary">
                <Code size={20} /> Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral mb-2">
                    Frontend & UI
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Shadcn", "Responsive Design"
                    ].map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-base-100 border border-base-300 px-3 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral mb-2">
                    Backend & Database
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "MongoDB", "RESTful API", "Zod", "JWT"].map(
                      (s) => (
                        <span
                          key={s}
                          className="text-xs bg-base-100 border border-base-300 px-3 py-1 rounded-md"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral mb-2">
                    Tools & Platforms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Git/GitHub", "Firebase", "Postman", "Vercel", "Netlify", "Figma"].map(
                      (s) => (
                        <span
                          key={s}
                          className="text-xs bg-base-100 border border-base-300 px-3 py-1 rounded-md"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Education From PDF */}
            <section>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6 text-primary">
                <GraduationCap size={20} /> Education
              </h2>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="font-bold text-base-content">
                    Complete Web Development Course (MERN)
                  </h4>
                  <p className="text-sm text-neutral">Programming Hero</p>
                  <a 
                    href="/assets/Complete Web Development Course Certificate.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-secondary mt-2 font-medium"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-base-content/20"></div>
                  <h4 className="font-bold text-base-content">
                    Bachelor of Social Sciences - Economics
                  </h4>
                  <p className="text-sm text-neutral">
                    Bangladesh Open University (Chittagong)
                  </p>
                  <p className="text-xs text-primary/80 mt-1">
                    2022 - Present
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Experience & Summary */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 underline decoration-primary underline-offset-8">
                Summary
              </h2>
              <p className="text-neutral leading-relaxed text-lg">
                Frontend-focused MERN Stack Developer specializing in React.js and Next.js, experienced in building responsive, user-centric web applications. Seeking a junior frontend role to contribute scalable UI solutions and improve user experience through clean, maintainable code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-8 text-primary">
                <Briefcase size={22} /> Projects
              </h2>
              <div className="space-y-8 border-l-2 border-base-300 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-bold">FastParcel</h4>
                  <p className="text-neutral italic">Enterprise Logistics & Dynamic Marketplace (MERN)</p>
                  <p className="text-sm mt-2 text-gray-500">
                    User authentication with role-based access. Product management, cart, and order system. REST API integration with MongoDB.
                  </p>
                  <p className="text-xs text-primary/80 mt-1">Next.js, Tailwind CSS, Framer Motion</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-base-content/20"></div>
                  <h4 className="text-xl font-bold">Entria</h4>
                  <p className="text-neutral italic">
                    Contest Platform (MERN)
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    Responsive personal portfolio with modern UI/UX. Smooth animations and page transitions. SEO-friendly and performance-optimized layout.
                  </p>
                  <p className="text-xs text-primary/80 mt-1">React.js, Node.js, Express.js, MongoDB, Firebase</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-base-content/20"></div>
                  <h4 className="text-xl font-bold">Food Lovers Network</h4>
                  <p className="text-neutral italic">
                    Task Management
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    Create, update, and delete tasks in real time. Secure login with protected routes. Clean dashboard UI for mobile and desktop.
                  </p>
                  <p className="text-xs text-primary/80 mt-1">React.js, Tailwind CSS, MongoDB, JWT</p>
                </div>
              </div>
            </section>

            {/* Featured Projects Reference */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Language Proficiency</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral">
                <li className="flex items-center gap-2">
                  ✓ Bangla (Native)
                </li>
                <li className="flex items-center gap-2">
                  ✓ English (Intermediate)
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
