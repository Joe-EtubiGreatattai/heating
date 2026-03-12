import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo" style={{ marginBottom: '1rem' }}>
                            <img src="/Logo tsp white.png" alt="Direct Heating Ltd" className="logo-img" />
                        </Link>
                        <p>Professional Gas Safe heating engineers serving North London. Boiler installation, servicing,
                            repairs and emergency callouts. Quality work, reliable service, competitive prices.</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/directheatingltd/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services">Boiler Installation</Link></li>
                            <li><Link href="/services">Boiler Servicing</Link></li>
                            <li><Link href="/services">Emergency Repairs</Link></li>
                            <li><Link href="/services">Underfloor Heating</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>For Customers</h4>
                        <ul>
                            <li><Link href="/household">Domestic Clients</Link></li>
                            <li><Link href="/business">Commercial</Link></li>
                            <li><Link href="/household">Property Management</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/testimonials">Reviews</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:info@directheatingltd.com">info@directheatingltd.com</a></li>
                            <li>North London Area</li>
                            <li><Link href="/contact">Get a Quote</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>

                    </div>

                    <div className="gas-safe-badge">
                        <div style={{ textAlign: 'right' }}>
                            <strong style={{ color: 'var(--accent)', display: 'block' }}>Gas Safe Registered</strong>
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
