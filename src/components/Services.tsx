import Link from 'next/link';

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Our Services</h2>
                    <p>From emergency repairs to complete installations, we provide comprehensive heating and plumbing
                        solutions tailored to your needs.</p>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">🔥</div>
                        <h3>Boiler Installation</h3>
                        <p>Expert installation of Vaillant, Glow-worm, Worcester Bosch and other leading brands. New
                            installs from £1,000 labour. 10-year warranties available.</p>
                        <Link href="/contact" className="service-link">Get Quote →</Link>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🔧</div>
                        <h3>Boiler Servicing</h3>
                        <p>Annual servicing to keep your boiler running efficiently and safely. Gas Safety Checks included.
                            Prevent breakdowns and extend boiler life.</p>
                        <Link href="/contact" className="service-link">Book Service →</Link>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">⚡</div>
                        <h3>Emergency Repairs</h3>
                        <p>24/7 emergency callout service for boiler breakdowns. Fast response times. We diagnose and fix
                            problems quickly to get your heating back on.</p>
                        <a href="tel:02046008746" className="service-link">Call Now →</a>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🌡️</div>
                        <h3>Underfloor Heating</h3>
                        <p>Installation and servicing of underfloor heating systems. Energy-efficient solutions for modern
                            homes and commercial properties.</p>
                        <Link href="/contact" className="service-link">Learn More →</Link>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🚿</div>
                        <h3>Hot Water Cylinders</h3>
                        <p>Installation and repair of unvented and vented hot water cylinders. Kingspan and other quality
                            brands supplied and fitted.</p>
                        <Link href="/contact" className="service-link">Get Quote →</Link>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🛁</div>
                        <h3>Bathroom Installation</h3>
                        <p>Complete bathroom refurbishments. Beautiful bathrooms, expertly installed. Plumbing, tiling,
                            fixtures and fittings all handled.</p>
                        <Link href="/contact" className="service-link">View Projects →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
