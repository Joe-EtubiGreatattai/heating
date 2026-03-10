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
        const sections = ['home', 'services', 'pricing', 'household', 'business', 'testimonials', 'contact'];
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
        { name: 'Services', href: '/services', id: 'services' },
        { name: 'Pricing', href: '/pricing', id: 'pricing' },
        { name: 'Household', href: '/household', id: 'household' },
        { name: 'Business', href: '/business', id: 'business' },
        { name: 'Reviews', href: '/testimonials', id: 'testimonials' },
        { name: 'Contact Us', href: '/contact', id: 'contact' },
    ];

    const isLinkActive = (link: any) => {
        // On the homepage, links are active based on the scrolled section
        if (pathname === '/') {
            return activeSection === link.id;
        }

        // On standalone pages, links are active if the URL matches
        return pathname === link.href;
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
