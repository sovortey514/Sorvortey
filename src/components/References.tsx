import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export default function References() {
  const { t } = useAppContext();

  const references = [
    {
      name: 'Ms. SEAK Leng',
      role: 'Deputy Head of Department of Information and Communication Engineering',
      phone: '(+855) 011685685',
      email: 'seakleng@itc.edu.kh'
    },
    {
      name: 'Mr. TY Sophearum',
      role: 'Software Engineer',
      phone: '(+855) 098834117',
      email: 'tysophearum91@gmail.com'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
            {t.references.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">{ref.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-light">{ref.role}</p>
              
              <div className="space-y-3">
                <a href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-light">
                  <Phone className="w-4 h-4" />
                  <span>{ref.phone}</span>
                </a>
                <a href={`mailto:${ref.email}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-light break-all">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{ref.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
