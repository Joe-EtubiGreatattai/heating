import Services from '@/components/Services';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Expert Boiler Installation & Servicing North London",
    description: "Gas Safe registered heating engineers for high-efficiency boiler installations, annual servicing, and 24/7 emergency repairs across North London.",
};

export default function ServicesPage() {
    return (
        <div className="page-top">
            <Services />
            <EmergencyCTA />
            <ContactForm />
        </div>
    );
}
