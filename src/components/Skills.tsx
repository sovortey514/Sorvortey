import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Lightbulb, Server, Settings, Users, Zap } from 'lucide-react';

export default function Skills() {
  const { t } = useAppContext();

  const technicalSkills = [
    { name: 'HTML/CSS/JS/Tailwind', icon: <Layout className="w-4 h-4" /> },
    { name: 'NodeJS/Laravel/Spring boot/Sharp.NET', icon: <Server className="w-4 h-4" /> },
    { name: 'MySQL/MongoDB', icon: <Database className="w-4 h-4" /> },
    { name: 'ReactJS/VueJs', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Git Lab/ GitHub', icon: <Settings className="w-4 h-4" /> },
  ];

  const expertise = [
    { name: 'API Development', icon: <Server className="w-4 h-4" /> },
    { name: 'Web Design', icon: <Layout className="w-4 h-4" /> },
    { name: 'Performance Optimization', icon: <Zap className="w-4 h-4" /> },
    { name: 'Database Design', icon: <Database className="w-4 h-4" /> },
    { name: 'Debugging and Solving Skills', icon: <Settings className="w-4 h-4" /> },
    { name: 'Development Practice', icon: <Code2 className="w-4 h-4" /> },
  ];

  const softSkills = [
    'Project management',
    'Creative design',
    'Decision maker',
    'Innovative',
    'Problem solver',
    'Motivator'
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-5 h-5 text-slate-400" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">{t.skills.technical}</h3>
            </div>
            <ul className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-slate-300 dark:text-slate-600">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-slate-400" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">{t.skills.expertise}</h3>
            </div>
            <ul className="space-y-4">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-slate-300 dark:text-slate-600">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-slate-400" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-white">{t.skills.highlights}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
