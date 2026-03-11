'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show sticky CTA only after scrolling down 400px (past hero cta)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`sticky-cta ${isVisible ? 'active' : ''}`}>
            <a href="tel:02046008746" className="btn btn-primary">📞 Call Now</a>
            <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Get Quote</Link>
        </div>
    );
}
