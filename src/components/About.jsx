import aboutImgs from "../assets/aboutImg.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      {/* Title */}
      <h1 className="my-16 text-center text-4xl font-bold tracking-tight">
        About <span className="text-indigo-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImgs}
              alt="About me"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-xl lg:w-1/2"
        >
          <div className="flex flex-col justify-center px-4 lg:px-0">
            <p className="my-4 text-lg leading-relaxed text-neutral-300">
              I am a <span className="font-semibold text-white">dedicated and versatile full-stack developer</span> 
              with a passion for building efficient, scalable, and user-friendly web applications. 
              Over the years, I’ve gained experience working with technologies such as{" "}
              <span className="text-indigo-400 font-medium">React, Next.js, Node.js, and MongoDB</span>.
            </p>

            <p className="my-4 text-lg leading-relaxed text-neutral-300">
              My journey started with a curiosity for how things work, which grew into 
              a career where I constantly learn and adapt to new challenges. 
              I thrive in collaborative environments, solving complex problems, 
              and delivering <span className="font-semibold text-white">high-quality solutions</span>.
            </p>

            <p className="my-4 text-lg leading-relaxed text-neutral-300">
              Outside of coding, I enjoy staying active, exploring new technologies, 
              and contributing to open-source projects. I’m always open to{" "}
              <span className="text-indigo-400 font-medium">new opportunities, collaborations, or tech discussions</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
