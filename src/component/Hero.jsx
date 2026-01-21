import OrbitingSkills from "./OrbitingSkills";
import Button from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../layouts/Container";

export default function Hero() {
  return (
    <section id="#" className="">
      <Container>
        <div className="min-h-screen flex flex-col-reverse md:flex-row items-center md:gap-10 justify-center">
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-3xl text-right sm:text-4xl md:text-5xl lg:text-6xl font-black text-base-content mt-4 mb-2 leading-tight transition-colors duration-300 satoshi">
              MOHAMMAD <span className="text-primary">NAYEEM</span>
              <br className="hidden sm:block" />
            </h1>
            <div></div>
            <p className="relative text-xl md:text-3xl lg:text-5xl font-bold mb-4 leading-tight satoshi pb-2 border-primary">
              Full Stack Developer
              <div className="absolute -bottom-2 md:right-28 translate-x-1/2 w-1/2 h-1 md:h-1.5 bg-primary"></div>
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
