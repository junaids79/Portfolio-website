import profilePic from "../assets/JSJPG.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between 
  px-8 py-20 pt-28 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="flex flex-wrap items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-extrabold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Junaid Shareef
            </motion.h1>

            {/* Role */}
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent lg:text-4xl"
            >
              Full Stack Developer
            </motion.span>

            {/* Bio */}
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl text-lg font-light leading-relaxed text-neutral-300"
            >
              I am a passionate{" "}
              <span className="font-medium text-white">full stack developer</span>{" "}
              with 6 months of hands-on experience in building scalable web
              applications. Skilled in{" "}
              <span className="text-purple-400 font-medium">
                React, Node.js, MongoDB
              </span>{" "}
              and{" "}
              <span className="text-indigo-400 font-medium">Firebase</span>, I
              craft user-friendly frontends and manage efficient backend
              operations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex gap-4"
            >
              <a
                href="#projects"
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-indigo-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-indigo-400 px-6 py-3 text-sm font-medium text-indigo-300 transition hover:bg-indigo-500/10"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="Profile"
              className="w-60 rounded-full border-4 border-indigo-500 shadow-lg shadow-indigo-900/40 lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
