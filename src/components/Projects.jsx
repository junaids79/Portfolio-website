// App.jsx
// Enhanced portfolio with polished Projects section

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsSample = [
  { id: 1, title: "Car Rental UI", category: "Web App", summary: "Responsive React car rental UI with booking flow and filters.", url: "#" },
  { id: 2, title: "Student CMS", category: "Dashboard", summary: "Student management dashboard built with Firebase and clean UX.", url: "#" },
  { id: 3, title: "GitHub Profile Analyzer", category: "Tool", summary: "Next.js app that analyzes GitHub profiles and visualizes contributions.", url: "#" },
  { id: 4, title: "Landing – GigFloww", category: "Landing", summary: "Marketing landing page with animations and testimonial slider.", url: "#" },
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", ...Array.from(new Set(projectsSample.map((p) => p.category)))];
  const filtered = projectsSample.filter((p) => filter === "All" || p.category === filter);

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Projects */}
      <section id="projects" className="mt-20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-3xl font-semibold">Projects</h3>
            <p className="mt-1 opacity-80">Some highlights of my work.</p>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full border text-sm transition ${filter === c ? "bg-indigo-600 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 border dark:border-slate-700 cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className="h-40 bg-gradient-to-br from-indigo-200 to-pink-200 dark:from-indigo-700 dark:to-pink-900 flex items-end p-4">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h4>
              </div>
              <div className="p-4">
                <p className="text-sm opacity-80 mb-4">{project.summary}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700">{project.category}</span>
                  <span className="opacity-70 group-hover:text-indigo-500 transition">View →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6">
            <motion.div initial={{ y: 20, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.95 }} className="max-w-2xl w-full bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-semibold">{selected.title}</h3>
                  <p className="text-sm opacity-70">{selected.category}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-sm px-3 py-1 border rounded-md">Close</button>
              </div>
              <div className="p-6">
                <p className="opacity-80 mb-6">{selected.summary}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-sm opacity-70">Screenshot 1</div>
                  <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-sm opacity-70">Screenshot 2</div>
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={selected.url} className="px-4 py-2 bg-indigo-600 text-white rounded-md">View Live</a>
                  <a href="#" className="px-4 py-2 border rounded-md">Case Study</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}