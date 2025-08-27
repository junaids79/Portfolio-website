import logo from "../assets/jsss.png" 
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 text-center">
        <img className="mx-4 w-12" src={logo} alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/junaid-shareef-2a775b2b9/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-500 transition-colors"/>
      </a>
      <a href="https://github.com/junaids79" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-700 transition-colors"/>
      </a>
      <a href="https://x.com/Junaid5954" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter className="hover:text-black transition-colors"/>
      </a>
   
    </div>
   </nav>
  )
}

export default Navbar