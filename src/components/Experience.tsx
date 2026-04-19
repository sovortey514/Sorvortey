import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';

export default function Experience() {
  const { t } = useAppContext();

  const experiences = [
    {
      title: 'API Developer',
      company: 'ACLEDA Bank PLC',
      date: 'April 2025-Present',
      description: 'Banking Service Modernization & Payment Systems',
      technologies: ['Java', 'MySQL','Soap UI', 'Postman', 'Git Lab','OpenShift','Redis','...']
    },
    {
      title: 'Develop a Fixed Asset management system',
      company: 'ONE MORE internship',
      date: 'July-October 2024',
      description: 'Management System (Individual)',
      technologies: ['Java', 'React Js', 'MySQL']
    },
    {
      title: 'Develop a POS management system',
      company: 'Camcyber',
      date: 'Mar-Apr 2024',
      description: 'POS system (Individual Test and intergretion)',
      technologies: ['Laravel', 'Angular', 'MySQL']
    },
    {
      title: 'Develop a Network Student school project',
      company: 'School Project',
      date: 'Feb-Mar 2023',
      description: 'Network Student App (Individual)',
      technologies: ['Figma', 'HTML', 'CSS', 'Javascript']
    },
    {
      title: 'Develop a Library app school project',
      company: 'School Project',
      date: 'Jan-Mar 2023',
      description: 'Library management system (Team)',
      technologies: ['Java', 'JavaFX Library', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-3">
                <div className="text-sm text-slate-400 dark:text-slate-500 md:w-32 shrink-0">
                  {exp.date}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {exp.company}
                  </div>
                </div>
              </div>
              <div className="md:pl-40">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-light">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
