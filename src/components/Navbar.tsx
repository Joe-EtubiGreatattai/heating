'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsNavbarScrolled(true);
            } else {
                setIsNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'About', href: '/about' },
        { name: 'Videos', href: '/videos' },
        { name: 'Business', href: '/business' },
        { name: 'Household', href: '/household' },
        { name: 'Sitemap', href: '/sitemap' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="navbar" style={isNavbarScrolled ? { boxShadow: '0 2px 20px rgba(0,0,0,0.1)' } : { boxShadow: 'none' }}>
            <div className="nav-container">
                <Link href="/" className="logo">
                    <div className="logo-icon">DH</div>
                    <div className="logo-text">DIRECT <span>HEATING</span></div>
                </Link>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`} style={isMobileMenuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(26, 26, 26, 0.98)', padding: '2rem' } : {}}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={pathname === link.href ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li><a href="tel:02046008746" className="nav-cta">📞 0204 600 8746</a></li>
                </ul>
                <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
                    <span style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
                    <span style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(7px, -6px)' } : {}}></span>
                </div>
            </div>
        </nav>
    );
}
