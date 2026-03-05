import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';

export const metadata = {
    title: "Domestic Heating & Plumbing | Direct Heating Ltd",
    description: "Reliable heating and plumbing services for homeowners and tenants in North London. 24/7 emergency support.",
};

export default function HouseholdPage() {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <span style={{ fontSize: '3rem' }}>🏠</span>
                <h1>Domestic Heating Services</h1>
                <p>Trusted boiler services and plumbing for your home in North London.</p>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <Services />
            </div>

            <div className="segments-grid">
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Homeowners</h3>
                    <p>From new boiler installs to annual servicing, we keep your home warm and safe all year round.</p>
                </div>
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Landlords & Tenants</h3>
                    <p>Gas Safety Certificates (CP12) and efficient tenant liaison to handle repairs quickly and professionally.</p>
                </div>
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Smart Upgrades</h3>
                    <p>Installation of Hive, Nest, and other smart heating controls to help you save on energy bills.</p>
                </div>
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ContactForm />
            </div>
        </div>
    );
}
