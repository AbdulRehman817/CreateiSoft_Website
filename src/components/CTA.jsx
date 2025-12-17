import { useEffect, useRef, useState } from "react";

import bookImage from "../assets/book-cs.png";
import bgImage from "../assets/get-start-cs.png";
const CTA = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32  relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-[32px]  font-bold text-black mb-4 leading-tight">
              LET'S MAKE IT TO THE EXTRA MILE
              <span className="text-black">*</span> TOGETHER
            </h3>

            <p className="text-[#645b76] text-[16px] mb-[30px] italic">
              *Be it the business race or an actual one, we'll help you conquer
              it.
            </p>

            <p className="text-[#645b76] text-[16px] leading-relaxed mb-[30px]">
              From your journey of a startup to becoming an industry tycoon, we
              can help you in every stage of your courageous story without a
              hitch. Our spirit to exceed clients' expectations can make sure
              your business reaches the top-most floor of success. All you have
              to do is rely on our craftsmanship of building a tall enough
              ladder. In other words, our digital solutions can get the results.
            </p>

            <button className="border-2 bg-[#bd1f48] border-[#bd1f48] text-[#bd1f48] hover:bg-transparent hover:transition-all hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-[#bd1f48] rounded-full px-8 py-2 transition-colors hover:text-white">
              GET STARTED
            </button>
          </div>

          {/* Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img
              src={bookImage}
              alt="Journey of a Startup - Creatif Soft"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
