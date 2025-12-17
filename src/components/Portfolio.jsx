import { useEffect, useRef, useState } from "react";

import rushShop from "../assets/rush-shop.jpg";
import fireBall from "../assets/fire-ball.jpg";
import solar from "../assets/solar.png";
import coldStone from "../assets/cold-stone.png";
import realHoney from "../assets/real-honey.png";
import fruitify from "../assets/fruitify.png";
import coloorist from "../assets/coloorist.png";
import switchel from "../assets/switchel.png";
import customizeJackets from "../assets/customize-jackets.png";
import cubesat from "../assets/cubesat.png";
import honey from "../assets/honey.png";

const portfolioItems = [
  { id: 1, title: "Rush Shop", image: rushShop },
  { id: 2, title: "Fire Ball", image: fireBall },
  { id: 3, title: "Solar", image: solar },
  { id: 4, title: "Cold Stone", image: coldStone },
  { id: 5, title: "Real Honey", image: realHoney },
  { id: 6, title: "Fruitify", image: fruitify },
  { id: 7, title: "Coloorist", image: coloorist },
  { id: 8, title: "Switchel", image: switchel },
  { id: 9, title: "Customize Jackets", image: customizeJackets },
  { id: 10, title: "Cubesat", image: cubesat },
  { id: 11, title: "Honey", image: honey },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const sectionRef = useRef(null);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#311b53] mb-4">
            Our Exhibition
          </h2>
          <p className="text-[#2c184b] leading-relaxed font-medium">
            We make no empty promises when it comes to excellence. Instead, we
            let our work speak for itself. Our satisfied customers are not less
            than a pride for us. Creatisoft acquires a robust portfolio that not
            only represents the diverse skills of our teams but also reflects
            the dedication we put into every project.
          </p>
        </div>

        {/* Grid Portfolio */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-xl">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#311b53] mb-2">
                {selectedItem.title}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
