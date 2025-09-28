import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
        <div  className="border-b border-neutral-900 pb-20 bg-gradient-to-b from-gray-900 to-black text-white">

          <section id="contact" className="mt-20">

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-5xl font-bold tracking-tight"
      >
        Get in <span className="text-purple-400">Touch</span>
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 text-lg"
      >
        <p className="text-gray-300">{CONTACT.address}</p>
        <p className="text-gray-300">{CONTACT.phoneNo}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
        >
          {CONTACT.email}
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="flex justify-center gap-8 mt-10 text-3xl"
      >
        <a
          href="https://www.linkedin.com/in/junaid-shareef-2a775b2b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/junaids79"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Junaid5954"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition transform hover:scale-110"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </motion.div>
       </section>
    </div>
   
  );
};

export default Contact;
