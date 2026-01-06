import React from "react";
import ProfileCard from "./aboutMe/ProfileCard";
import ContactCard from "./aboutMe/ContactCard";
import EducationItem from "./aboutMe/EducationItem";
import ExperienceItem from "./aboutMe/ExperienceItem";
import Button from "./ui/Button";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/NAYEEM.pdf";
    link.download = "NAYEEM.pdf";
    link.click();
  };
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">✦</span>
                <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                  About Me
                </span>
              </div>

              <h2 className="text-5xl font-bold mb-4 leading-tight satoshi">
                Passionate & Lead <br />
              </h2>
              <p className="text-xl mb-4">
                Web Developer | Brand Identity Designer
              </p>

              <p className="text-neutral max-w-xl leading-relaxed">
                I'm Mohammad Nayeem, a quality-driven passionate about creating
                intuitive, user-centered experiences. I've completed 10+
                projects turning complex ideas into seamless interfaces.
              </p>
              <div onClick={handleDownloadResume}>
                <Button className="font-bold flex items-center gap-2 transition-all mt-6">
                  Download Resume
                  <FiDownload size={20} />
                </Button>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">✦</span>
                <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                  Experience
                </span>
              </div>

              <ExperienceItem
                role="Frontend Web Developer"
                company="Self-Employed"
                description="Developing modern, responsive web interfaces using React, Next.js, and Tailwind CSS.Optimizing performance, accessibility, and component reusability in real-world projects.Working independently with clients to deliver reliable and maintainable frontend solutions."
                date="2025 - Present"
              />

              <ExperienceItem
                role="Graphic Designer"
                company="Freelancer.com"
                description="I am a Professional Graphic & Logo designer with over 6 years of industry experience in the design industry. The design is a huge part of my life, and I work hard to produce the highest quality, effective, innovative, timeless designs that my clients will love and I would love to work with you."
                date="2019 - Present"
              />
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">✦</span>
                <span className="text-xl text-primary font-semibold uppercase tracking-widest">
                  Education
                </span>
              </div>

              <EducationItem
                title="MARN Stack Developer Certificate"
                institute="Programming Hero"
                date="2025 - Present"
              />

              <EducationItem
                title="BSS in Economics"
                institute="Bangladesh Open University"
                date="2022 - Present"
              />

              <EducationItem
                title="Diploma in Computer Science"
                institute="Shyamoli Ideal Polytechnic Institute"
                date="2016 - 2020"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <ProfileCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
