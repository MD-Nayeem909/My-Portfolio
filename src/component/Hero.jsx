import React, { useState, useEffect } from "react";
import OrbitingSkills from "./OrbitingSkills";
import Button from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../layouts/Container";
const HtmlIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path fill="#E34F26" d="M71 460L30 0h451l-41 460-185 52z" />
    <path fill="#F16529" d="M256 472l149-41 35-391H256z" />
    <path
      fill="#EBEBEB"
      d="M256 208h-75l-5-58h80V94H94l12 133h150v-56zm-83 149l-4-47h-60l8 90 119 33v-58l-63-18z"
    />
    <path
      fill="#FFF"
      d="M256 208v56h69l-7 74-62 18v58l119-33 13-148h-5l-6-65H256V94h158l-4 56h-79v58z"
    />
  </svg>
);
const ReactIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="currentColor"
  >
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const VueIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 221"
  >
    <path
      fill="#41B883"
      d="M204.8,0H256L128,220.8L0,0h97.92L128,51.2L157.44,0H204.8z"
    />
    <path fill="#35495E" d="M0,0l128,220.8L256,0h-51.2L128,132.48L51.2,0H0z" />
  </svg>
);
const SvelteIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>file_type_svelte</title>
    <path
      d="M26.47,5.7A8.973,8.973,0,0,0,14.677,3.246L7.96,7.4a7.461,7.461,0,0,0-3.481,5.009,7.686,7.686,0,0,0,.8,5.058,7.358,7.358,0,0,0-1.151,2.8,7.789,7.789,0,0,0,1.4,6.028,8.977,8.977,0,0,0,11.794,2.458L24.04,24.6a7.468,7.468,0,0,0,3.481-5.009,7.673,7.673,0,0,0-.8-5.062,7.348,7.348,0,0,0,1.152-2.8A7.785,7.785,0,0,0,26.47,5.7"
      fill="#ff3e00"
    />
    <path
      d="M14.022,26.64A5.413,5.413,0,0,1,8.3,24.581a4.678,4.678,0,0,1-.848-3.625,4.307,4.307,0,0,1,.159-.61l.127-.375.344.238a8.76,8.76,0,0,0,2.628,1.274l.245.073-.025.237a1.441,1.441,0,0,0,.271.968,1.63,1.63,0,0,0,1.743.636,1.512,1.512,0,0,0,.411-.175l6.7-4.154a1.366,1.366,0,0,0,.633-.909,1.407,1.407,0,0,0-.244-1.091,1.634,1.634,0,0,0-1.726-.622,1.509,1.509,0,0,0-.413.176l-2.572,1.584a4.934,4.934,0,0,1-1.364.582,5.415,5.415,0,0,1-5.727-2.06A4.678,4.678,0,0,1,7.811,13.1A4.507,4.507,0,0,1,9.9,10.09l6.708-4.154a4.932,4.932,0,0,1,1.364-.581A5.413,5.413,0,0,1,23.7,7.414a4.679,4.679,0,0,1,.848,3.625,4.272,4.272,0,0,1-.159.61l-.127.375-.344-.237a8.713,8.713,0,0,0-2.628-1.274l-.245-.074.025-.237a1.438,1.438,0,0,0-.272-.968,1.629,1.629,0,0,0-1.725-.622,1.484,1.484,0,0,0-.411.176l-6.722,4.14a1.353,1.353,0,0,0-.631.908,1.394,1.394,0,0,0,.244,1.092,1.634,1.634,0,0,0,1.726.621,1.538,1.538,0,0,0,.413-.175l2.562-1.585a4.9,4.9,0,0,1,1.364-.581,5.417,5.417,0,0,1,5.728,2.059,4.681,4.681,0,0,1,.843,3.625A4.5,4.5,0,0,1,22.1,21.905l-6.707,4.154a4.9,4.9,0,0,1-1.364.581"
      fill="#fff"
    />
  </svg>
);
const JQueryIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path
      fill="#0769AD"
      d="M448 32H64C42.7 32 24 50.7 24 72v368c0 21.3 18.7 40 40 40h384c21.3 0 40-18.7 40-40V72c0-21.3-18.7-40-40-40z"
    />
    <path
      fill="#FFF"
      d="M384 256c0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128 128 57.3 128 128zm-64 0c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z"
    />
  </svg>
);
const FrameworkPill = ({ framework, text, active, onClick }) => {
  const Icon = iconMap[framework];
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all duration-200 hover:scale-105 hover:shadow-md
        ${
          active
            ? "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-sm"
            : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600"
        }
      `}
    >
      <Icon className="w-4 h-4 mr-1.5 sm:mr-2" />
      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
        {text}
      </span>
    </button>
  );
};
export default function Hero() {
  return (
    <section id="home" className="">
      <Container>
        <div className="min-h-screen flex flex-col-reverse md:flex-row items-center md:gap-10 justify-center">
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-3xl text-right sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mt-4 mb-2 leading-tight transition-colors duration-300 satoshi">
              MOHAMMAD <span className="text-primary">NAYEEM</span>
              <br className="hidden sm:block" />
            </h1>
            <div></div>
            <p className="relative text-xl md:text-3xl lg:text-5xl font-bold mb-4 leading-tight satoshi pb-2 border-primary">Full Stack Developer
              <div className="absolute -bottom-4 md:right-28 translate-x-1/2 w-1/2 h-1 md:h-1.5 bg-primary"></div>
            </p>
            <p className=" sm:text-lg text-neutral max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed transition-colors duration-300 text-center md:text-right">
              Welcome to my portfolio! I'm Mohammad Nayeem, a passionate web
              developer dedicated to crafting beautiful and functional digital
              experiences. Explore my projects and skills below to see how I can
              bring your ideas to life.
            </p>
            <Button className="font-bold flex items-center gap-2 transition-all">
              Start a Project Now <ArrowUpRight size={20} />
            </Button>
          </div>
          <div>
            <OrbitingSkills />
          </div>
        </div>
      </Container>
    </section>
  );
}
