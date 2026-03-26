import { useAppContext } from '../contexts/AppContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  const { t } = useAppContext();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="tel:+85587609971" className="flex items-start gap-4 p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
              <div className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-light">{t.contact.phone}</p>
                <p className="text-base font-medium text-slate-900 dark:text-white">+855 87609971</p>
              </div>
            </a>

            <a href="mailto:sovateysoaphorn@gmail.com" className="flex items-start gap-4 p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
              <div className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-light">{t.contact.email}</p>
                <p className="text-base font-medium text-slate-900 dark:text-white break-all">sovateysoaphorn@gmail.com</p>
              </div>
            </a>

            <a href="#" className="flex items-start gap-4 p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors group">
              <div className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-light">{t.contact.portfolio}</p>
                <p className="text-base font-medium text-slate-900 dark:text-white">View Portfolio</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 border border-slate-200 dark:border-slate-800">
              <div className="text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1 font-light">{t.contact.address}</p>
                <p className="text-base font-medium text-slate-900 dark:text-white">Boeng Salang khhan mean chey, Phnom Penh city</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
