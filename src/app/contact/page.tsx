import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact Gas Safe Engineers in North London | Direct Heating Ltd",
    description: "Get a free, no-obligation quote for boiler installation or emergency repairs. Professional heating services serving all North London postcodes.",
};

export default function ContactPage() {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <ContactForm />
        </div>
    );
}
