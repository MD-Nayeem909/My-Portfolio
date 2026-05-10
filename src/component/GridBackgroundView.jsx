import React, { useState, useEffect } from "react";
const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({
        x,
        y,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "moveGrid 20s linear infinite",
        transform: `translate(${mousePosition.x / 30}px, ${
          mousePosition.y / 30
        }px)`,
      }}
    >
      {}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-primary/20 rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      {}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};
export default function GridBackgroundView() {
  return (
    <div className="w-full h-full bg-base-100 overflow-hidden">
      <GridBackground />
    </div>
  );
}
