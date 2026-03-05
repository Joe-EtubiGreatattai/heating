import Services from '@/components/Services';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Boiler Services & Plumbing | Direct Heating Ltd",
    description: "Expert boiler installation, servicing, and repairs across North London. Domestic and commercial heating solutions.",
};

export default function ServicesPage() {
    return (
        <>
            <Services />
            <EmergencyCTA />
            <ContactForm />
        </>
    );
}
