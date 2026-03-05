import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import VideoSection from '@/components/VideoSection';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <Testimonials />
      <VideoSection />
      <EmergencyCTA />
      <ContactForm />
    </>
  );
}
