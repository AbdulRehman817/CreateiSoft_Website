// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import webDesignImg from "../assets/web-design.png";
// import contentWritingImg from "../assets/content-writing.png";
// import digitalMarketingImg from "../assets/digital-marketing.png";
// import brandingImg from "../assets/branding.png";
// import ecommerceImg from "../assets/e-commerce.png";

// const services = [
//   {
//     id: 1,
//     title: "Web Designing",
//     description:
//       "When you tell a great story, people listen. But when you show it, people believe in it. A great web design can show your customers what you are capable of and that's what we focus on...",
//     image: webDesignImg,
//   },
//   {
//     id: 2,
//     title: "Content Writing",
//     description:
//       "You can write tons of sentences to explain why your business is the best. But hey that's what everybody does...",
//     image: contentWritingImg,
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description:
//       "Digital marketing sounds easy. Good digital marketing gets a little hard. But great digital marketing that takes your business to where it should be...",
//     image: digitalMarketingImg,
//   },
//   {
//     id: 4,
//     title: "Branding Solution",
//     description:
//       "A bird without its wings that cannot take a flight. An architecture without a structure that cannot stand...",
//     image: brandingImg,
//   },
//   {
//     id: 5,
//     title: "E-commerce Websites",
//     description:
//       "There are so many stores online but customers don't go buying things from everyone...",
//     image: ecommerceImg,
//   },
// ];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const nextService = () =>
//     setCurrentIndex((prev) => (prev + 1) % services.length);

//   const prevService = () =>
//     setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

//   return (
//     <section
//       id="services"
//       ref={sectionRef}
//       className="py-20 lg:py-32 gradient-bg relative overflow-hidden"
//     >
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             From Website Designing To Content Creation,
//           </h2>
//           <p className="text-foreground/80 text-xl">We Simply Do It All.</p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           <div className="flex items-center gap-4 lg:gap-8">
//             {/* Prev Button */}
//             <button
//               onClick={prevService}
//               className="hidden lg:flex p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors shrink-0"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             {/* Cards */}
//             <div className="flex-1 overflow-hidden">
//               <div
//                 className="flex transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {services.map((service, index) => (
//                   <div key={service.id} className="w-full flex-shrink-0 px-2">
//                     <div
//                       className={`glass-effect rounded-3xl p-8 lg:p-12 transition-all duration-500 ${
//                         isVisible
//                           ? "opacity-100 scale-100"
//                           : "opacity-0 scale-95"
//                       }`}
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       <div className="grid lg:grid-cols-2 gap-8 items-center">
//                         <div>
//                           <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
//                             {service.title}
//                           </h3>
//                           <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">
//                             {service.description}
//                           </p>
//                         </div>

//                         <div className="hidden lg:block">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-auto max-w-md mx-auto"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Next Button */}
//             <button
//               onClick={nextService}
//               className="hidden lg:flex p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors shrink-0"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Mobile Nav */}
//           <div className="flex lg:hidden justify-center gap-4 mt-6">
//             <button
//               onClick={prevService}
//               className="p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextService}
//               className="p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-8">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   currentIndex === index
//                     ? "w-8 bg-foreground"
//                     : "bg-foreground/30"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Buttons (Replaced ShadCN Button) */}
//         <div
//           className={`flex flex-wrap items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
//             HERE'S MORE
//           </button>

//           <span className="text-foreground/50 font-medium">OR</span>

//           <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
//             RING THE BELL
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import webDesignImg from "../assets/web-design.png";
import contentWritingImg from "../assets/content-writing.png";
import digitalMarketingImg from "../assets/digital-marketing.png";
import brandingImg from "../assets/branding.png";
import ecommerceImg from "../assets/e-commerce.png";
import webDesignCsHomeImg from "../assets/web-design-cs-home.png";

const services = [
  {
    id: 1,
    title: "Web Designing",
    description:
      "When you tell a great story, people listen. But when you show it, people believe in it. A great web design can show your customers what you are capable of and that's what we focus on...",
    image: webDesignImg,
  },
  {
    id: 2,
    title: "Content Writing",
    description:
      "You can write tons of sentences to explain why your business is the best. But hey that's what everybody does...",
    image: contentWritingImg,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Digital marketing sounds easy. Good digital marketing gets a little hard. But great digital marketing that takes your business to where it should be...",
    image: digitalMarketingImg,
  },
  {
    id: 4,
    title: "Branding Solution",
    description:
      "A bird without its wings that cannot take a flight. An architecture without a structure that cannot stand...",
    image: brandingImg,
  },
  {
    id: 5,
    title: "E-commerce Websites",
    description:
      "There are so many stores online but customers don't go buying things from everyone...",
    image: ecommerceImg,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Carousel controls
  const nextService = () =>
    setCurrentIndex((prev) => (prev + 1) % services.length);

  const prevService = () =>
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${webDesignCsHomeImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 bg-">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#311b53] mb-4">
            From Website Designing To Content Creation,
            <span>We Simply Do It All.</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Prev Button */}
            <CarouselButton onClick={prevService} direction="left" />

            {/* Cards */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <CarouselButton onClick={nextService} direction="right" />
          </div>

          {/* Mobile Nav */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <CarouselButton onClick={prevService} direction="left" mobile />
            <CarouselButton onClick={nextService} direction="right" mobile />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-foreground"
                    : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <GradientButton>HERE'S MORE</GradientButton>
          <span className="text-foreground/50 font-medium">OR</span>
          <GradientButton>RING THE BELL</GradientButton>
        </div>
      </div>
    </section>
  );
};

/* ------------------ Reusable Components ------------------ */

const CarouselButton = ({ onClick, direction, mobile }) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-full border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors shrink-0 ${
        mobile ? "lg:hidden" : "hidden lg:flex"
      }`}
    >
      <Icon className={mobile ? "w-5 h-5" : "w-6 h-6"} />
    </button>
  );
};

const ServiceCard = ({ service, index, isVisible }) => (
  <div className="w-full flex-shrink-0 px-2">
    <div
      className={`glass-effect rounded-3xl p-8 lg:p-12 transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#311b53] mb-4">
            {service.title}
          </h3>
          <p className="text-[#2c184b] font-medium leading-relaxed text-sm lg:text-base">
            {service.description}
          </p>
        </div>

        <div className="hidden lg:block">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
);

const GradientButton = ({ children }) => (
  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
    {children}
  </button>
);

export default Services;
