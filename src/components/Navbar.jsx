import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#281c71] to-[#9d2b7f] backdrop-blur-sm shadow-[0_0_10px_rgba(0,0,0,0.45)] duration-[1s] ease-in"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-around gap-[115px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <svg viewBox="0 0 50 50" className="w-10 h-10">
            <defs>
              <linearGradient
                id="headerLogoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path
              d="M20 8 C10 8 5 16 5 25 C5 34 10 42 20 42 C26 42 31 39 35 35 L30 30 C27 33 24 35 20 35 C13 35 8 30 8 25 C8 20 13 15 20 15 C24 15 27 17 30 20 L35 15 C31 11 26 8 20 8 Z"
              fill="url(#headerLogoGradient)"
              opacity="0.9"
            />
            <path
              d="M28 6 L28 44 L34 44 L34 30 L40 30 C47 30 50 25 50 19 C50 13 47 6 40 6 L28 6 Z M34 12 L38 12 C42 12 44 14.5 44 19 C44 23.5 42 26 38 26 L34 26 L34 12 Z"
              fill="#ec4899"
              opacity="0.8"
            />
          </svg>
          <span className="text-white font-semibold text-xl tracking-wide">
            Creatif Soft
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="border-2 border-white/30 text-white hover:bg-[#bd1f48] hover:transition-all hover:ease-in-out hover:duration-500 hover:cursor-pointer hover:border-[#bd1f48] rounded-full px-6 py-2 transition-colors">
            GET A QUOTE
          </button>

          <a
            href="tel:021-34977733"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>021 - 34977733</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white hover:text-white/80  transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 z-50 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6">
            <span className="text-white font-semibold text-xl">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-white/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-4xl md:text-6xl font-bold hover:text-white/70 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="p-6 text-center">
            <p className="text-white/70 text-sm">
              © 2024 Creatif Soft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
