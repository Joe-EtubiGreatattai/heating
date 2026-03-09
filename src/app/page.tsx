import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import VideoSection from '@/components/VideoSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Segments from '@/components/Segments';

export default function Home() {
  return (
    <>
      <Hero />
      <Segments />
      <TrustBar />
      <Services />
      <Pricing />
      <Testimonials />
      <VideoSection />
      <FAQ />
      <EmergencyCTA />
      <ContactForm />
    </>
  );
}
