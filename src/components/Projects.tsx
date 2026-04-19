import { useAppContext } from "../contexts/AppContext";
import { motion } from "motion/react";

export default function Projects() {
  const { t } = useAppContext();

  const projects = [
    {
      title: "POS System",
      image: "/POS.png",
      github: "https://github.com/sovortey514/Pos-system",
      demo: "/POS-demo.pdf",
    },
    {
      title: "Fixed Asset Management",
      image: "/Fixed Asset.png",
      github: "https://github.com/sovortey514/Fixed_Asset",
      demo: "/Fixed Asset Management.pdf",
    },
    {
      title: "Food Ordering",
      image: "/Foof.png",
      github: "https://github.com/sovortey514/Food-deivery",
      demo: "/Ecommerce-demo.pdf",
    },
    {
      title: "POS System Food returant",
      image: "/pos_sys.png",
      github: "https://github.com/sovortey514/Portfolio.git",
      demo: "/VT POS System.pdf",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-light text-slate-900 dark:text-white">
            {t.projects.title || "Projects"}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    Github
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow scroll */}
        <div className="flex justify-center mt-12">
          <a href="#contact">
            <img
              src="/assets/arrow.png"
              alt="Scroll to contact"
              className="w-8 h-8 animate-bounce cursor-pointer opacity-60 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
