import ContactForm from '@/components/ContactForm';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';

export const metadata = {
    title: "Commercial Heating & Plumbing North London",
    description: "Expert commercial heating and plumbing services for businesses in North London. Maintenance contracts, large boiler rooms, and priority response.",
};

export default function BusinessPage() {
    return (
        <div className="container page-top" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <h1>Commercial Heating Solutions</h1>
                <p>Professional heating and plumbing services for North London businesses.</p>
            </div>

            <div className="segments-grid" style={{ marginBottom: '6rem' }}>
                <div className="segment-card" style={{ cursor: 'default', background: 'var(--primary)', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
                    <div className="segment-header">
                        <span style={{ fontSize: '2.5rem' }}>🏢</span>
                        <h3>For Businesses & Commercial Sites</h3>
                    </div>
                    <p>Professional heating and plumbing for North London&apos;s commercial properties, from offices to warehouses.</p>
                    <div className="segment-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                        <ul className="segment-features" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Commercial Gas Safety</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Maintenance Contracts</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Large Boiler Rooms</li>
                            <li style={{ color: 'rgba(255,255,255,0.8)' }}>Priority Response</li>
                        </ul>
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                            <p style={{ marginBottom: '0.5rem', color: 'white' }}><strong>Commercial Rate:</strong> £140/Hour</p>
                            <p style={{ marginBottom: '0.5rem', color: 'white' }}><strong>Maintenance:</strong> Fixed Quote</p>
                            <p style={{ color: 'white' }}><strong>Emergency Callout:</strong> Priority Service</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <div className="section-header">
                    <h2>Commercial Services</h2>
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
