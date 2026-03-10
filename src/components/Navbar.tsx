'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
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

        // Intersection Observer for active section detection
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Detect when section is in middle of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Sections to observe
        const sections = ['home', 'domestic-segment', 'commercial-segment', 'pricing', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', id: 'home' },
        { name: 'Pricing', href: '/#pricing', id: 'pricing' },
        { name: 'Household', href: '/#who-we-serve', id: 'domestic-segment' },
        { name: 'Business', href: '/#who-we-serve', id: 'commercial-segment' },
        { name: 'Contact Us', href: '/contact', id: 'contact' },
    ];

    const isLinkActive = (link: any) => {
        // Special case for Contact Us since it's a separate page
        if (link.href === '/contact') {
            return pathname === '/contact';
        }

        // For homepage sections
        if (pathname === '/') {
            return activeSection === link.id;
        }

        return false;
    };

    return (
        <nav className="navbar" style={isNavbarScrolled ? { boxShadow: '0 2px 20px rgba(0,0,0,0.1)' } : { boxShadow: 'none' }}>
            <div className="nav-container">
                <Link href="/" className="logo">
                    <img src="/Logo tsp white.png" alt="Direct Heating Ltd" className="logo-img" />
                </Link>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`} style={isMobileMenuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '100%', left: 0, width: '100%', background: 'rgba(26, 26, 26, 0.98)', padding: '2rem' } : {}}>
                    {isMobileMenuOpen && (
                        <li style={{ marginBottom: '1rem' }}>
                            <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src="/Logo tsp white.png" alt="Direct Heating Ltd" className="logo-img" />
                            </Link>
                        </li>
                    )}
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={isLinkActive(link) ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
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
