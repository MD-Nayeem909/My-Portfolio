import React, { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react"; // lucide-react ব্যবহার করলে
import Button from "../ui/Button";
import busAnimation from "../../assets/bus_animation.gif";

const ServiceItem = ({ title, subtitle, description, points, image, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-500 cursor-pointer border border-base-300 rounded-2xl mb-4 
      ${isActive ? 'bg-linear-to-br from-base-300 to-base-100 p-8' : 'bg-base-100 p-6 hover:bg-base-200'}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-neutral text-sm mb-2">{subtitle}</p>
          <h3 className={`font-bold transition-all ${isActive ? 'text-4xl mb-4' : 'text-2xl'}`}>
            {title}
          </h3>
          
          {/* যদি একটিভ থাকে তবেই নিচের কন্টেন্ট দেখাবে */}
          {isActive && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-neutral text-sm max-w-md mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {points.map((point, i) => (
                  <li key={i} className="flex items-center text-xs text-primary/80">
                    <span className="text-primary mr-2">✦</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ডান পাশের বাটন এবং ইমেজ */}
        <div className="flex flex-col items-end justify-between h-full">
          <div className={`p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-primary text-black' : 'bg-base-100 text-base-content'}`}>
            {isActive ? <ArrowUpRight size={24} /> : <ArrowRight size={20} />}
          </div>
          
          {isActive && image && (
            <div className="mt-8 hidden md:block">
               <img src={image} alt={title} className="w-48 h-32 object-cover rounded-xl rotate-12 shadow-2xl border border-base-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MyServices = () => {
  const [activeIndex, setActiveIndex] = useState(2); // ২ নম্বরটি (Branding) ডিফল্ট একটিভ রাখা হয়েছে আপনার ছবির মতো

  const services = [
    {
      title: "UI/UX Design",
      subtitle: "Designing Seamless Journeys",
      description: "Creating intuitive user interfaces and engaging experiences that convert users into customers.",
      points: ["User Research", "Wireframing", "Prototyping"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONa5AMkI-JPska1Um-EjwEgXEWsB_fjoGkw&s"
    },
    {
      title: "Web Development",
      subtitle: "Building Functional Solutions",
      description: "Developing fast, SEO-friendly, and responsive web applications using modern technologies.",
      points: ["React & Next.js", "Backend Integration", "Performance Setup"],
      image: "https://i.ibb.co.com/JwJVV7N8/Screenshot-2026-01-07-031825.png"
    },
    {
      title: "Branding",
      subtitle: "Shaping Memorable Identities",
      description: "Developing and maintaining web applications, ensuring functionality, and collaborating with teams to deliver seamless.",
      points: [
        "User Research & Analysis", "Wireframing & Prototyping",
        "Interactive Interface Design", "Usability Testing & Optimization"
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300" 
    },
    {
      title: "Animation Design",
      subtitle: "Bringing Ideas Alive",
      description: "Adding life to your digital products with smooth transitions and meaningful animations.",
      points: ["Motion Graphics", "Lottie Animations", "Micro-interactions"],
      image: "https://design4users.com/wp-content/uploads/2018/07/californication_bus_animation_tubik.gif"
    }
  ];

  return (
    <section id="services" className=" text-base-content py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side Header */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-primary">✦</span>
            <span className="text-xl text-primary font-semibold uppercase tracking-widest">My Services</span>
          </div>
          <h2 className="text-5xl font-bold satoshi leading-tight mb-4">
            Experience the Impact of User-Centered Design
          </h2>
          <p className="text-neutral mb-10 leading-relaxed">
            Experience the impact of user-centered design. I craft intuitive and engaging digital solutions that put users first.
          </p>
          <Button className="font-bold flex items-center gap-2 transition-all">
            Start a Project Now <ArrowUpRight size={20} />
          </Button>
        </div>

        {/* Right Side Accordion List */}
        <div className="lg:w-2/3">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              {...service}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;