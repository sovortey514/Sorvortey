import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';

export default function Education() {
  const { t } = useAppContext();

  const languages = [
    { name: 'Khmer', level: 'Native' },
    { name: 'English', level: 'B1' },
    { name: 'Chiness', level: 'HSK3' },
  ];

  const volunteerWork = [
    'Spin off (Team Media)',
    'Technon inovation (Team Organizer)',
    'Culture Fest (Team Media in Youth Aseemply)',
    'GIC Family (Team Media)'
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education & Languages */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">
                {t.education.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Institute of Technology of Cambodia</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-light">Graduated in Information and Communication Engineering 2025</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-light">Learn many Courses in the web development field.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-6">
                {t.education.languages}
              </h3>
              <ul className="space-y-4">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-sm text-slate-700 dark:text-slate-300">{lang.name}</span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Volunteer */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-2xl font-light text-slate-900 dark:text-white tracking-tight">
                {t.volunteer.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-6">
                {volunteerWork.map((work, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">{work}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
