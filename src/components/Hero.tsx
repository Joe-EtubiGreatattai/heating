'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';

const API = 'https://direct-heating.duckdns.org/api';

interface HeroData {
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    statNumber: string;
    statLabel: string;
    reviewQuote: string;
    reviewAuthor: string;
    phone: string;
    whatsappNumber: string;
    heroImage: string;
}

const DEFAULT: HeroData = {
    headline: 'Gas Safe Heating Engineers',
    headlineHighlight: 'You Can Trust',
    subtitle: 'Professional boiler installation, servicing & repairs across North London. Emergency callouts available. Domestic & commercial heating solutions.',
    statNumber: '500+',
    statLabel: 'Installations This Year',
    reviewQuote: 'Excellent service from start to finish. Completed to a very high standard.',
    reviewAuthor: 'Lucy',
    phone: '0204 600 8746',
    whatsappNumber: '442046008746',
    heroImage: '',
};

export default function Hero() {
    const [hero, setHero] = useState<HeroData>(DEFAULT);

    useEffect(() => {
        fetch(`${API}/cms/hero`)
            .then(r => r.json())
            .then((data: HeroData) => {
                if (data && data.headline) setHero(data);
            })
            .catch(() => { });
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>{hero.headline} <span>{hero.headlineHighlight}</span></h1>
                    <p className="hero-subtitle">{hero.subtitle}</p>

                    <div className="hero-badges">
                        <div className="badge">
                            <div className="badge-icon" style={{ background: 'white', overflow: 'hidden', padding: '2px' }}>
                                <Image src="/Gas Safe.png" alt="Gas Safe" width={36} height={36} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="badge-text">Gas Safe <strong>Registered</strong></div>
                        </div>
                        <div className="badge">
                            <div className="badge-icon"><Phone size={18} color="black" /></div>
                            <div className="badge-text"><strong>Emergency</strong> Callouts</div>
                        </div>
                        <div className="badge">
                            <div className="badge-text">5-Star <strong>Rated</strong></div>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <Link href="/contact" className="btn btn-primary">Get Free Quote</Link>
                        <a href="#booking" className="btn btn-secondary">Book Now</a>
                        <a href={`https://wa.me/${hero.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">WhatsApp Us</a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-image-main">
                        <img
                            src={hero.heroImage || '/hero.png'}
                            alt="Direct Heating engineers"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center top',
                                zIndex: 0
                            }}
                        />
                    </div>

                    <div className="floating-card review">
                        <div className="stars">★★★★★</div>
                        <p>&quot;{hero.reviewQuote}&quot;</p>
                        <strong style={{ display: 'block', marginTop: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem' }}>- {hero.reviewAuthor}</strong>
                    </div>

                    <div className="floating-card stats">
                        <h4>{hero.statNumber}</h4>
                        <p>{hero.statLabel}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
