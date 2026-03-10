import ContactForm from '@/components/ContactForm';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';

export const metadata = {
    title: "Domestic & Commercial Heating Solutions North London",
    description: "Professional heating and plumbing services tailored for homeowners, landlords, and commercial businesses across North London.",
};

export default function ForYouPage() {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <h1>Professional Heating Solutions</h1>
                <p>Whether it&apos;s your home or your business, we&apos;ve got your heating needs covered across North London.</p>
            </div>

            {/* Segment Selection */}
            <div className="segments-grid" style={{ marginBottom: '6rem' }}>
                <div className="segment-card" style={{ cursor: 'default', background: 'var(--light-gray)' }}>
                    <div className="segment-header">
                        <span style={{ fontSize: '2.5rem' }}>🏠</span>
                        <h3>For Homeowners</h3>
                    </div>
                    <p>Keep your family warm and safe with our reliable domestic services. From high-efficiency boiler installs to annual safety checks.</p>
                    <ul className="segment-features" style={{ marginTop: '1.5rem', color: 'var(--text-gray)' }}>
                        <li style={{ color: 'var(--text-gray)' }}>Annual Boiler Servicing</li>
                        <li style={{ color: 'var(--text-gray)' }}>Radiator & Valve Repairs</li>
                        <li style={{ color: 'var(--text-gray)' }}>Smart Home (Hive/Nest)</li>
                        <li style={{ color: 'var(--text-gray)' }}>Emergency Breakdowns</li>
                    </ul>
                </div>
                <div className="segment-card" style={{ cursor: 'default', background: 'var(--primary)', color: 'white' }}>
                    <div className="segment-header">
                        <span style={{ fontSize: '2.5rem' }}>🏢</span>
                        <h3>For Businesses</h3>
                    </div>
                    <p>Professional heating and plumbing for North London&apos;s commercial properties, from offices to warehouses.</p>
                    <ul className="segment-features" style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                        <li style={{ color: 'rgba(255,255,255,0.8)' }}>Commercial Gas Safety</li>
                        <li style={{ color: 'rgba(255,255,255,0.8)' }}>Maintenance Contracts</li>
                        <li style={{ color: 'rgba(255,255,255,0.8)' }}>Large Boiler Rooms</li>
                        <li style={{ color: 'rgba(255,255,255,0.8)' }}>Priority Response</li>
                    </ul>
                </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <div className="section-header">
                    <h2>Our Core Services</h2>
                </div>
                <Services />
            </div>

            <div style={{ marginTop: '4rem' }}>
                <TrustBar />
            </div>

            <div style={{ marginTop: '4rem', background: 'var(--accent)', padding: '2.5rem', borderRadius: '16px', color: 'white' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Transparent Rates</h2>
                        <p>We believe in honest pricing for both domestic and commercial clients. No hidden fees, just professional service.</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Domestic Rate:</strong> £80/Service</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Commercial Rate:</strong> £140/Hour</p>
                        <p><strong>Emergency Callout:</strong> £150 (First hour)</p>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ContactForm />
            </div>
        </div>
    );
}
