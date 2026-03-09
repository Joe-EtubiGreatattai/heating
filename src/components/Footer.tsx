import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo" style={{ marginBottom: '1rem' }}>
                            <img src="/Direct Heating logo White.JPG" alt="Direct Heating Ltd" className="logo-img" />
                        </Link>
                        <p>Professional Gas Safe heating engineers serving North London. Boiler installation, servicing,
                            repairs and emergency callouts. Quality work, reliable service, competitive prices.</p>
                        <div className="social-links">
                            <a href="#">f</a>
                            <a href="#">in</a>
                            <a href="#">ig</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services">Boiler Installation</Link></li>
                            <li><Link href="/services">Boiler Servicing</Link></li>
                            <li><Link href="/services">Emergency Repairs</Link></li>
                            <li><Link href="/services">Underfloor Heating</Link></li>
                            <li><Link href="/services">Bathrooms</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>For Customers</h4>
                        <ul>
                            <li><Link href="/for-you">Domestic Clients</Link></li>
                            <li><Link href="/for-you">Commercial</Link></li>
                            <li><Link href="/for-you">Property Management</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/testimonials">Reviews</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="tel:02046008746">0204 600 8746</a></li>
                            <li><a href="mailto:info@directheatingltd.com">info@directheatingltd.com</a></li>
                            <li>North London Area</li>
                            <li><Link href="/contact">Get a Quote</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        <p>&copy; 2024 Direct Heating Ltd. All rights reserved.</p>
                        <p style={{ marginTop: '0.5rem' }}>Company Registration: [Number] | VAT: [Number]</p>
                    </div>

                    <div className="gas-safe-badge">
                        <div style={{ textAlign: 'right' }}>
                            <strong style={{ color: 'var(--accent)', display: 'block' }}>Gas Safe Registered</strong>
                            <small style={{ color: 'rgba(255,255,255,0.7)' }}>Engineer #[Number]</small>
                        </div>
                        <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src="/Gas Safe.jpg" alt="Gas Safe Registered" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
