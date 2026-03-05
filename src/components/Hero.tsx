import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Gas Safe Heating Engineers <span>You Can Trust</span></h1>
                    <p className="hero-subtitle">Professional boiler installation, servicing & repairs across North London. 24/7
                        emergency callouts available. Domestic & commercial heating solutions.</p>

                    <div className="hero-badges">
                        <div className="badge">
                            <div className="badge-icon">✓</div>
                            <div className="badge-text">Gas Safe <strong>Registered</strong></div>
                        </div>
                        <div className="badge">
                            <div className="badge-icon">⚡</div>
                            <div className="badge-text">24/7 <strong>Emergency</strong></div>
                        </div>
                        <div className="badge">
                            <div className="badge-icon">★</div>
                            <div className="badge-text">5-Star <strong>Rated</strong></div>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <Link href="/contact" className="btn btn-primary">Get Free Quote</Link>
                        <a href="tel:02046008746" className="btn btn-secondary">Call Now</a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-image-main">
                        {/* Engineers with boiler background */}
                    </div>
                    <div className="floating-card review">
                        <div className="stars">★★★★★</div>
                        <p>"Excellent service from start to finish. Completed to a very high standard."</p>
                        <small>- Lucy Perry</small>
                    </div>
                    <div className="floating-card stats">
                        <h4>500+</h4>
                        <p>Installations This Year</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
