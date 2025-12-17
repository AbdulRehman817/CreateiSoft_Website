import { useEffect, useRef, useState } from "react";

import aboutImage from "../assets/cs-1.png";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  // ✅ Correct useRef syntax
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
    // ✅ Attach the ref to the section
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <h1 className="text-3xl ml-[80px]  md:text-4xl lg:text-[50px] block  font-bold text-[#311b53] mb-8 leading-tight font-bold ">
        The Digital Agency With Potential
        <br />
        To Take You Ahead.
      </h1>
      <div className="container mx-[37px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-48 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6 text-[#2c184b] w-[500px] font-medium letter-[0.5px] text-[15px] tracking-[0.5px] leading-relaxed">
              <p>
                Gone are the days when ordinary was fine. The world is moving
                fast and so are we. Here, at Creatif Soft, we take a
                human-centered and future proof approach in building performing
                solutions for today and tomorrow. With creativity at the core,
                we provide unique digital services, dynamic web solutions,
                valuable content, and much more. This allows us to empower
                prospective brands and their experiences.
              </p>

              <p>
                Using ideas that result in lifetime value, we unbind brands'
                true capability, so they can embark on a journey of continuous
                success. The only time we chant a big no is when a cold cup of
                tea and bland ideas are on the table. Instead, we think Big,
                rely on Two Cups Of Hot Tea, and MAKE IT HAPPEN.
              </p>
            </div>

            <button className="mt-8 bg-[#bd1f48] border-1 ease-in duration-200 hover:cursor-pointer border-[#bd1f48] text-white font-normal px-3 py-1 rounded-3xl hover:bg-transparent hover:border-white  hover:transition-all hover:ease-in-out hover:duration-200 transition-colors ">
              GET TO KNOW US MORE
            </button>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative bottom-[35px]">
              <img
                src={aboutImage}
                alt="Creatif Soft - Creative Digital Agency"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
