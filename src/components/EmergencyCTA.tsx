import Link from 'next/link';

export default function EmergencyCTA() {
    return (
        <section className="emergency-cta">
            <div className="container">
                <h2>🚨 Emergency Boiler Breakdown?</h2>
                <p>Fast emergency response for heating breakdowns across North London</p>
                <a href="tel:02046008746" className="emergency-phone">📞 0204 600 8746</a>
                <br />
                <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'white' }}>Or Request Callback</Link>
            </div>
        </section>
    );
}
