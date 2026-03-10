import Link from 'next/link';

export default function Segments() {
    return (
        <section className="segments" id="who-we-serve">
            <div className="container">
                <div className="section-header">
                    <h2>Who We Serve</h2>
                    <p>Specialised heating solutions tailored for every type of customer. We understand different needs require different approaches.</p>
                </div>

                <div className="segments-grid">
                    <Link href="/household" className="segment-card" id="domestic-segment" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="segment-header">
                            <div className="segment-icon">🏠</div>
                            <div>
                                <h3>Domestic Clients</h3>
                                <span>Homeowners & Tenants</span>
                            </div>
                        </div>
                        <ul className="segment-features">
                            <li>Boiler installations & replacements</li>
                            <li>Annual servicing & Gas Safety Checks</li>
                            <li>Emergency breakdown repairs</li>
                            <li>Central heating upgrades</li>
                            <li>Competitive £80/service rate</li>
                            <li>Same-day/next-day availability</li>
                        </ul>
                        <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Learn More
                        </div>
                    </Link>

                    <Link href="/business" className="segment-card" id="commercial-segment" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="segment-header">
                            <div className="segment-icon">🏢</div>
                            <div>
                                <h3>Commercial Clients</h3>
                                <span>Businesses & Commercial Sites</span>
                            </div>
                        </div>
                        <ul className="segment-features">
                            <li>Commercial boiler installations</li>
                            <li>Large-scale heating systems</li>
                            <li>Regular maintenance contracts</li>
                            <li>Site-specific solutions</li>
                            <li>£140/hour + travel</li>
                            <li>Priority response times</li>
                        </ul>
                        <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            View Solutions
                        </div>
                    </Link>

                    <Link href="/contact" className="segment-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="segment-header">
                            <div className="segment-icon">🔑</div>
                            <div>
                                <h3>Property Management</h3>
                                <span>Agencies & Landlords</span>
                            </div>
                        </div>
                        <ul className="segment-features">
                            <li>Trusted by Leaders, Soho Buildings & more</li>
                            <li>Multiple property management</li>
                            <li>Gas Safety Certificates (CP12)</li>
                            <li>Tenant liaison & access coordination</li>
                            <li>Competitive rates</li>
                            <li>Detailed reporting & invoicing</li>
                        </ul>
                        <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Partner With Us
                        </div>
                    </Link>
                </div>


            </div>
        </section>
    );
}
