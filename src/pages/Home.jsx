import { TargetIcon } from "lucide-react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
