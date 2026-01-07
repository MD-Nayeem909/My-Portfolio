import React from "react";
import Hero from "../component/Hero";
import Dock from "../component/Dock";
import GridBackgroundView from "../component/GridBackgroundView";
import About from "../component/About";
import MyServices from "../component/myServices/MyServices";
import SupportSection from "../component/SupportSection";
import FeaturedWork from "../component/FeaturedWork";
import Skills from "../component/Skills";
import SmoothScroll from "../component/ui/SmoothScroll";

const Home = () => {
  return (
    <SmoothScroll>
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full -z-10">
          <GridBackgroundView />
        </div>
        <Hero />
        <About />
        <MyServices />
        <Skills />
        <FeaturedWork />
        <SupportSection />
        <Dock />
      </div>
    </SmoothScroll>
  );
};

export default Home;
