import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sunSkyTravels from "../assets/sun-sky-travels.jpg";
import travelo from "../assets/travelo.jpg";
import cenbizGlobal from "../assets/cenbiz-global.jpg";
import found from "../assets/found.jpg";
import writers from "../assets/writers.jpg";
import mesol from "../assets/mesoi.jpg";
import customizeJackets from "../assets/customize-jackets.jpg";

const testimonials = [
  {
    id: 1,
    name: "BILAL AHMED",
    role: "MARKETING HEAD",
    company: "SUN SKY TRAVELS",
    quote:
      "Our search for digital media agencies took us to Creatif Soft and we are glad that their services were just in the way we wanted. Thank you!",
    image: sunSkyTravels,
  },
  {
    id: 2,
    name: "SIDDIQUAH ALI",
    role: "PROJECT MANAGER",
    company: "TRAVELO PK",
    quote:
      "I initially approached them for the SEO of my website. I'm just enthralled by the boost in my ranking. I would highly recommend their reliable services.",
    image: travelo,
  },
  {
    id: 3,
    name: "HASSAM KHAN",
    role: "MANAGING DIRECTOR",
    company: "CENBIZ GLOBAL",
    quote:
      "Wow! I must say I am impressed by another fantastic experience. You gave a brand identity to my business through a beautiful logo design. Good job Creatif Soft!",
    image: cenbizGlobal,
  },
  {
    id: 4,
    name: "ABDULLAH",
    role: "INTERNATIONAL DIGITAL MARKETING DIRECTOR",
    company: "FOUND PK",
    quote:
      "Thank you Creatif Soft for the efficient and incredible content writing service provided by you.",
    image: found,
  },
  {
    id: 5,
    name: "MUHAMMAD HAMZA",
    role: "PROJECT MANAGER",
    company: "WRITERS PK",
    quote:
      "We decided to rebrand our entire website as it was very outdated. With the help of Creatif Soft, we were able to make it more interactive and engaging. Thank you for all the support.",
    image: writers,
  },
  {
    id: 6,
    name: "SARAH KHAN",
    role: "CEO",
    company: "MESOL",
    quote:
      "The team at Creatif Soft proved to be very professional. We are very happy with the final product.",
    image: mesol,
  },
  {
    id: 7,
    name: "NATALIA",
    role: "PROJECT MANAGER",
    company: "CUSTOMIZED JACKETS",
    quote:
      "The content for our social media marketing was really exceptional. After trying some other digital media companies and freelancers, we are proud to say that we have settled for Creatif Soft and its services.",
    image: customizeJackets,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-[50px] text-[#311b53] font-bold mb-2 tracking-wider">
            TRUSTED BY MANY
          </h3>
          <h2 className="text-[16px] text-[#645b76]">Loved by Many More</h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative max-w-[950px] mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className="glass-effect bg-gradient-to-r from-[#281c71] to-[#9d2b7f]
                    rounded-3xl p-10 lg:p-12 h-[400px] max-w-[950px] mx-auto flex items-center gap-10"
                  >
                    {/* Avatar */}
                    <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white/20 shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <p className="text-white text-lg leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-white font-bold text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-white/80 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-[#645b76]/30 text-[#645b76] hover:bg-[#645b76]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-[#645b76]"
                      : "bg-[#645b76]/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-[#645b76]/30 text-[#645b76] hover:bg-[#645b76]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
