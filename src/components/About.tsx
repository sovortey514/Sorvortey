import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';

export default function About() {
  const { t, language } = useAppContext();

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white mb-8 tracking-tight">
            {t.about.title}
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light ${
            language === 'km' ? 'font-khmer leading-loose' : ''
          }`}>
            {t.about.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
