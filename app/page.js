import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
