import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    name: "CREATIF SOFT",
    tagline: "STAND OUT FROM THE REST",
    subtitle: "Selling Memories",
    description:
      "Creatif Soft is a creative & innovative digital agency that thinks beyond normal. Kind of like a service providing agency. More like a talented partner providing effective solutions. At a time when digital trends are taking a 360° shift, we use a blend of skills and vision to help your brand grow up and above.",
  },
  {
    id: 2,
    name: "TEC",
    tagline: "Craft That Show Skills",
    subtitle: "Tec.org.pk",
    description: "Eminent optimising tactics to stand out from the crowd",
  },
  {
    id: 3,
    name: "TRAVELO",
    tagline: "Change That Signifies",
    subtitle: "Travelo.pk",
    description: "Digital marketing that excite, inspire, and motivate",
  },
  {
    id: 4,
    name: "SIGNSTECH",
    tagline: "Chance to Move Ahead",
    subtitle: "Signstech.co.uk",
    description: "Bespoke tech solutions that bring customers closer",
  },
  {
    id: 5,
    name: "ORCHARD GATE",
    tagline: "Confidence To Top",
    subtitle: "Orchardgateproperty.co.uk",
    description: "A user-friendly and responsive website with a difference",
  },
  {
    id: 6,
    name: "SUN SKY TRAVELS",
    tagline: "Concepts That Do More",
    subtitle: "sunskytravels.com",
    description: "Interactive and engaging website that defy the ordinary",
  },
  {
    id: 7,
    name: "THE KAJVALZ",
    tagline: "Coherence With Value",
    subtitle: "TheKajvalz.com",
    description: "Digital solutions with a spoonful of style, flair, & ability",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600">
      {/* Background CP Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full max-w-4xl">
          <defs>
            <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          {/* C Shape */}
          <path
            d="M200 80 C90 80 30 170 30 250 C30 330 90 420 200 420 C260 420 310 390 350 350 L300 300 C270 330 240 350 200 350 C130 350 80 300 80 250 C80 200 130 150 200 150 C240 150 270 170 300 200 L350 150 C310 110 260 80 200 80 Z"
            fill="url(#cGrad)"
          />

          {/* P Shape */}
          <path
            d="M280 60 L280 440 L340 440 L340 300 L400 300 C470 300 500 250 500 190 C500 130 470 60 400 60 L280 60 Z M340 120 L380 120 C420 120 440 145 440 190 C440 235 420 260 380 260 L340 260 L340 120 Z"
            fill="url(#pGrad)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <div
              key={currentSlide}
              className={`transition-all duration-600 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight uppercase">
                {slides[currentSlide].tagline}
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-6">
                {slides[currentSlide].subtitle}
              </p>

              <div className="w-16 h-1 bg-white/50 mb-6" />

              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                {slides[currentSlide].description}
              </p>

              <button className="bg-[#bd1f48] border-1 ease-in duration-200 hover:cursor-pointer border-[#bd1f48] text-white px-3 py-1 rounded-3xl hover:bg-transparent hover:border-white  hover:transition-all hover:ease-in-out hover:duration-200 transition-colors font-light">
                SUCCESS STARTS HERE
              </button>
            </div>
          </div>
        </div>

        {/* Side Navigation Dots */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 items-end">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="group flex items-center gap-3 justify-end"
            >
              <span
                className={`text-xs font-medium tracking-wide transition-all duration-300 hidden lg:block ${
                  currentSlide === index
                    ? "text-white opacity-100"
                    : "text-white/50 opacity-0 group-hover:opacity-100"
                }`}
              >
                {slide.name}
              </span>
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white border-white scale-110"
                    : "border-white/50 hover:border-white"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1} />
            </button>

            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
            </div>

            <button
              onClick={nextSlide}
              className="text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1} />
            </button>
          </div>

          <p className="text-white/60 text-xs tracking-widest uppercase">
            scroll down to be amazed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
