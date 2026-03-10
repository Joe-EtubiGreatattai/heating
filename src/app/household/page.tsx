import ContactForm from '@/components/ContactForm';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';

export const metadata = {
    title: "Domestic Heating & Plumbing Solutions North London",
    description: "Professional heating and plumbing services for homeowners and tenants across North London. Boiler installations, servicing, and emergency repairs.",
};

export default function HouseholdPage() {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <h1>Domestic Heating Solutions</h1>
                <p>Reliable heating and plumbing services tailored for your home.</p>
            </div>

            <div className="segments-grid" style={{ marginBottom: '6rem' }}>
                <div className="segment-card" style={{ cursor: 'default', background: 'var(--light-gray)', maxWidth: '800px', margin: '0 auto' }}>
                    <div className="segment-header">
                        <span style={{ fontSize: '2.5rem' }}>🏠</span>
                        <h3>For Homeowners & Tenants</h3>
                    </div>
                    <p>Keep your family warm and safe with our reliable domestic services. From high-efficiency boiler installs to annual safety checks.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                        <ul className="segment-features" style={{ color: 'var(--text-gray)' }}>
                            <li style={{ color: 'var(--text-gray)' }}>Annual Boiler Servicing</li>
                            <li style={{ color: 'var(--text-gray)' }}>Radiator & Valve Repairs</li>
                            <li style={{ color: 'var(--text-gray)' }}>Smart Home (Hive/Nest)</li>
                            <li style={{ color: 'var(--text-gray)' }}>Emergency Breakdowns</li>
                        </ul>
                        <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                            <p style={{ marginBottom: '0.5rem' }}><strong>Domestic Rate:</strong> £80/Service</p>
                            <p style={{ marginBottom: '0.5rem' }}><strong>Hourly Rate:</strong> £120/Hour</p>
                            <p><strong>Emergency Callout:</strong> £150 (First hour)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <div className="section-header">
                    <h2>Domestic Services</h2>
                </div>
                <Services />
            </div>

            <div style={{ marginTop: '4rem' }}>
                <TrustBar />
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ContactForm />
            </div>
        </div>
    );
}
