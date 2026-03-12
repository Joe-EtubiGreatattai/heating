import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import VideoSection from '@/components/VideoSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import SelfFixFaults from '@/components/SelfFixFaults';
import Segments from '@/components/Segments';

export const metadata = {
  title: "Direct Heating Ltd | Gas Safe Boiler Installation & Plumbing North London",
  description: "Reliable Gas Safe heating engineers in North London. Specialized in boiler installations, servicing, and emergency repairs. Get a free quote today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Segments />
      <Services />
      <EmergencyCTA />
      <Pricing />
      <Testimonials />
      <VideoSection />
      <SelfFixFaults />
      <FAQ />
      <ContactForm />
    </>
  );
}
