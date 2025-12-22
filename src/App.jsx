import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { Skills } from './components/sections/Skills';
import { Timeline } from './components/sections/Timeline';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <Skills />
        <Timeline />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </Layout>
    </LanguageProvider>
  )
}

export default App
