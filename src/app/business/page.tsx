import ContactForm from '@/components/ContactForm';
import TrustBar from '@/components/TrustBar';

export const metadata = {
    title: "Commercial Heating & Plumbing | Direct Heating Ltd",
    description: "Specialized heating solutions tailored for commercial sites in North London. Priority response times for businesses.",
};

export default function BusinessPage() {
    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <span style={{ fontSize: '3rem' }}>🏢</span>
                <h1>Commercial Heating Solutions</h1>
                <p>Professional services for businesses and commercial properties across North London.</p>
            </div>

            <div className="segments-grid">
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Large-Scale Installations</h3>
                    <p>Design and installation of high-capacity heating systems for offices, warehouses, and leisure centers like Wembley Arena.</p>
                </div>
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Maintenance Contracts</h3>
                    <p>Regular servicing and priority maintenance to ensure your business operations never stop due to heating issues.</p>
                </div>
                <div className="segment-card" style={{ cursor: 'default' }}>
                    <h3>Commercial Gas Safety</h3>
                    <p>Full Gas Safety inspections and certifications for commercial kitchens and boiler rooms.</p>
                </div>
            </div>

            <div style={{ marginTop: '4rem' }}>
                <TrustBar />
            </div>

            <div style={{ marginTop: '4rem', background: 'var(--accent)', padding: '2rem', borderRadius: '12px', color: 'white' }}>
                <h2>Commercial Rates</h2>
                <p>Our standard commercial rate is <strong>£70/hour</strong> + travel (2hr minimum). We offer priority response times for our contract clients.</p>
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ContactForm />
            </div>
        </div>
    );
}
