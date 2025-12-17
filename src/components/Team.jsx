import { useEffect, useRef, useState } from "react";

import teamImage from "../assets/team.png";
import timeSaveImage from "../assets/time-save-cs.png";
const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${timeSaveImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src={teamImage}
              alt="Creatif Soft Team - Champions of the Industry"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Started From Microsoft Paint, Now We Are A Battalion
            </h2>

            <p className="text-foreground/85 leading-relaxed mb-8">
              Humbled by the beginnings, driven by passion, and always ready to
              beat you at a cricket game, the thinkers and makers at creatif
              soft are the ones who make our services the best of the best.
              Hailing from Karachi, our talented team of software brainiacs, seo
              intellects, social media geniuses, and wordsmiths make sure that
              they are doing their best. They are the best in the biz, after
              all. Take our word for them.
            </p>

            <button className="border-2 bg-white border-white text-[#bd1f48] hover:bg-transparent hover:transition-all hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-white rounded-full px-8 py-2 transition-colors hover:text-white">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
