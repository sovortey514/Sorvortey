/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen font-sans selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <References />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
