import { TargetIcon } from "lucide-react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
    </>
  );
};

export default Home;
