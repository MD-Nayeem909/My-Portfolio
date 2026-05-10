import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const TerminalSection = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "",
      output: [
        "Welcome to Nayeem's Interactive Terminal v1.0.0",
        "Type 'help' to see a list of available commands.",
      ],
    },
  ]);
  const endOfTerminalRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let newOutput = [];

      switch (cmd) {
        case "help":
          newOutput = [
            "Available commands:",
            "  about      - Learn more about me",
            "  skills     - View my technical skills",
            "  projects   - View my recent projects",
            "  contact    - Get my contact info",
            "  clear      - Clear the terminal",
          ];
          break;
        case "about":
          newOutput = [
            "Mohammad Nayeem Uddin",
            "Frontend Web Developer | MERN Stack",
            "I'm a quality-driven developer passionate about creating intuitive, user-centered experiences.",
            "I've completed 10+ projects turning complex ideas into seamless interfaces.",
          ];
          break;
        case "skills":
          newOutput = [
            "Frontend: React, Next.js, Tailwind CSS, Framer Motion",
            "Backend: Node.js, Express, RESTful API",
            "Database: MongoDB",
            "Tools: Git, Postman, Vercel, Netlify",
            "Design: Figma, Illustrator, Photoshop",
          ];
          break;
        case "projects":
          newOutput = [
            "1. FastParcel - Enterprise Logistics & Dynamic Marketplace",
            "2. ENTRIA Contest Platform - Full-stack contest management platform",
            "3. Food Lover - Responsive food delivery web app",
            "Type 'projects' to see more on my portfolio below!",
          ];
          break;
        case "contact":
          newOutput = [
            "Email: mdnayeemuddin909@gmail.com",
            "Phone: +880-1518-966-045",
            "Location: Chittagong, Bangladesh",
            "Or use the contact form at the bottom of the page!",
          ];
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "":
          newOutput = [];
          break;
        default:
          newOutput = [`Command not found: ${cmd}. Type 'help' for available commands.`];
      }

      setHistory((prev) => [...prev, { command: input, output: newOutput }]);
      setInput("");
    }
  };

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">✦</span>
            <span className="text-xl text-primary font-semibold uppercase tracking-widest flex items-center gap-2">
              <Terminal size={20} /> Developer Terminal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold satoshi leading-tight text-base-content">
            Let's get technical
          </h2>
          <p className="text-neutral mt-4 max-w-lg">
            Type commands to interact with my portfolio like a true developer.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-base-300/50 bg-[#0d1117] font-mono text-sm sm:text-base relative group"
        >
          {/* Terminal Header */}
          <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <div className="mx-auto text-gray-400 text-xs font-semibold flex items-center gap-2">
              <Terminal size={14} /> guest@nayeem-portfolio:~
            </div>
            <div className="w-12"></div> {/* Spacer to center title */}
          </div>

          {/* Terminal Body */}
          <div
            className="p-4 sm:p-6 h-[400px] overflow-y-auto text-gray-300 custom-scrollbar cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((block, index) => (
              <div key={index} className="mb-4">
                {block.command && (
                  <div className="flex gap-2 text-green-400 mb-2">
                    <span className="text-blue-400">guest@nayeem:~$</span>
                    <span>{block.command}</span>
                  </div>
                )}
                {block.output.map((line, i) => (
                  <div key={i} className="mt-1 break-words opacity-90 whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex gap-2 text-green-400 items-center">
              <span className="text-blue-400 shrink-0">guest@nayeem:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none flex-1 text-green-400 font-mono focus:ring-0 p-0 m-0"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={endOfTerminalRef} className="pb-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
