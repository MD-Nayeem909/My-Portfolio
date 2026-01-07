import React from "react";

const SkillBadge = ({ name }) => (
  <span className="px-4 py-2 bg-base-200 border border-base-300 rounded-xl text-sm font-medium text-neutral hover:border-primary/50 hover:text-base-content transition-all cursor-default">
    {name}
  </span>
);

const SkillGroup = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-lg font-semibold text-base-content mb-4 satoshi">
      {title}
    </h3>
    <div className="p-6 bg-base-100 border border-base-300 rounded-2xl flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillBadge key={skill} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      category: "Frontend Tech",
      groups: [
        {
          title: "Core Technologies",
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "ES6+",
            "Web APIs",
            "Responsive Design",
          ],
        },
        { title: "Frontend Frameworks", skills: ["ReactJs", "NextJs"] },
        { title: "State Management", skills: ["Context API", "React Query"] },
        {
          title: "UI Libraries",
          skills: [
            "Tailwind CSS",
            "Material UI",
            "Shadcn UI",
            "Sera UI",
            "Chakra UI",
            "Daisy UI",
            "Styled Components",
          ],
        },
      ],
    },
    {
      category: "Backend Tech",
      groups: [
        {
          title: "Core Technologies",
          skills: ["NodeJs", "ExpressJs", "MongoDB", "Firebase"],
        },
      ],
    },
    {
      category: "Build Tools",
      groups: [
        {
          title: "Tools & Workflow",
          skills: [
            "npm",
            "Vite",
            "Figma",
            "ESLint",
            "Webpack",
            "Postman",
            "VS code",
            "Prettier",
            "Git-Github",
          ],
        },
      ],
    },
  ];

  return (
    <section id="skills" className=" px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-primary">✦</span>
          <span className="text-xl text-primary font-semibold uppercase tracking-widest">
            Skills
          </span>
        </div>

        {/* Skill Categories */}
        {skillData.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-base-content mb-8 border-l-4 border-primary pl-4">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.groups.map((group, gIdx) => (
                <SkillGroup
                  key={gIdx}
                  title={group.title}
                  skills={group.skills}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
