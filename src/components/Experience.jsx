import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      {/* Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-bold tracking-tight"
      >
        Experience
      </motion.h1>

      <div className="relative mx-auto max-w-5xl">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded bg-neutral-800 lg:block"></div>

        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:odd:flex-row-reverse"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 lg:px-6"
            >
              <p className="mb-2 text-sm font-medium text-indigo-400 lg:text-right">
                {experience.year}
              </p>
            </motion.div>

            {/* Timeline dot */}
            <div className="relative z-10 hidden h-6 w-6 rounded-full border-4 border-indigo-500 bg-neutral-900 lg:block"></div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 w-full max-w-xl rounded-lg bg-neutral-900/50 p-6 shadow-md backdrop-blur-lg transition hover:scale-[1.02] lg:mt-0 lg:w-1/2 lg:px-6"
            >
              <h6 className="mb-2 text-lg font-semibold text-white">
                {experience.role}{" "}
                <span className="text-sm font-medium text-indigo-400">
                  @ {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
