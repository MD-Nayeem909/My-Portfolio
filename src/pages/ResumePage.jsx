import React from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";
import { Link } from "react-router";

const ResumePage = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume.pdf";
    link.download = "Mohammad_Nayeem_Resume.pdf";
    link.click();
  };
  return (
    <div className="min-h-screen bg-black text-base-content satoshi py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-base-300 pb-12 mb-12 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              MD. NAYEEM UDDIN
            </h1>
            <p className="text-primary text-xl font-medium tracking-wide">
              Full Stack Developer & UI/UX Specialist
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-neutral text-sm">
              <Link
                to="mailto:mdnayeemuddin909@gmailcom"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail size={16} /> mdnayeemuddin909@gmail.com
              </Link>
              <span className="flex items-center gap-2">
                <Phone size={16} /> +8801883-153330
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
                    Frontend
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "ReactJs",
                      "NextJs",
                      "Tailwind CSS",
                      "JavaScript (ES6+)",
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
                    Backend & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["NodeJs", "MongoDB", "Firebase", "Git", "Figma"].map(
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
                <div>
                  <h4 className="font-bold text-base-content">
                    Higher Secondary Certificate
                  </h4>
                  <p className="text-sm text-neutral">
                    Bangladesh Open University (Chittagong)
                  </p>
                  <p className="text-xs text-primary/80 mt-1">
                    Passing Year: 2021 | GPA: 3.50
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-base-content">
                    Secondary School Certificate
                  </h4>
                  <p className="text-sm text-neutral">Rahmania High School</p>
                  <p className="text-xs text-primary/80 mt-1">
                    Passing Year: 2014
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
                Seeking a challenging position with a future-oriented company
                offering opportunities for growth. Fast and effectively I want
                to be a part of success by offering high motivation,
                responsibility and quality work. Specialized in modern UI/UX
                design with a deep focus on user-centered digital products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-8 text-primary">
                <Briefcase size={22} /> Professional Experience
              </h2>
              <div className="space-y-8 border-l-2 border-base-300 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-bold">Brand-Promotor</h4>
                  <p className="text-neutral italic">Robi Axita Ltd.</p>
                  <p className="text-sm mt-2 text-gray-500">
                    Communicated effectively to promote brand values and drive
                    user engagement.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-base-content/20"></div>
                  <h4 className="text-xl font-bold">Brand-Promotor</h4>
                  <p className="text-neutral italic">
                    British American Tobacco Bangladesh
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    Responsible for interpersonal communication and achieving
                    growth targets.
                  </p>
                </div>
              </div>
            </section>

            {/* Featured Projects Reference */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Personal Attributes</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral">
                <li className="flex items-center gap-2">
                  ✓ Self-confident and positive minded
                </li>
                <li className="flex items-center gap-2">
                  ✓ Capable to take responsibility
                </li>
                <li className="flex items-center gap-2">
                  ✓ Meets pressure and deadlines
                </li>
                <li className="flex items-center gap-2">
                  ✓ Fluently Bilingual (Bengali & English)
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
