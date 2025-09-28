import logo from "../assets/jsss.png" 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { section } from "framer-motion/client";

const Navbar = () => {
  return (
    <nav id="contact" className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-6 
      bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-12 transition-transform hover:scale-110"
          src={logo}
          alt="Logo"
        />
        
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-5 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/junaid-shareef-2a775b2b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/junaids79"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Junaid5954"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-gray-200"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-pink-400"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
