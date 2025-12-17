import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import footerLogo from "../assets/footer-logo-cs.png";
const Footer = () => {
  return (
    <footer className="relative bg-[#f9f9f9] text-[#311b53] pt-20 pb-10 px-6 lg:px-12 overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[180px] font-bold text-[#f1f1f1] leading-none select-none">
          PERFECTION
        </h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + Tagline */}
        <div className="lg:col-span-1">
          <img src={footerLogo} alt="Creatif Soft Logo" className="mb-4 w-32" />

          <p className="text-red-500 font-medium">
            A Digital Marketing Agency concerned with results and committed to
            excellence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-[#645b76] font-medium">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Content Writing</li>
            <li>E-Commerce Web Design</li>
            <li>Digital Marketing And Strategy</li>
            <li>Branding Solution</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-[#645b76] font-medium">
            <li>About CS</li>
            <li>Jobs</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Our Approach</li>
            <li>Contact us</li>
            <li>Join CS</li>
          </ul>
        </div>

        {/* Follow + Button */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Creatif Soft</h3>
            <div className="flex gap-4 text-white">
              <a
                href="#"
                className="bg-[#311b53] p-2 rounded-full hover:bg-[#645b76] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-[#311b53] p-2 rounded-full hover:bg-[#645b76] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-[#311b53] p-2 rounded-full hover:bg-[#645b76] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 text-right">
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow hover:opacity-90 transition">
              JOIN US
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 mt-12 text-center text-[#645b76] font-medium">
        © 2014–2025 Creatif Soft
      </div>
    </footer>
  );
};

export default Footer;
