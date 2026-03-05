import Link from 'next/link';

export const metadata = {
    title: "Sitemap | Direct Heating Ltd",
    description: "A complete list of pages on the Direct Heating Ltd website.",
};

export default function SitemapPage() {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Reviews', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
        { name: 'About Us', href: '/about' },
        { name: 'Videos', href: '/videos' },
        { name: 'Commercial Clients', href: '/business' },
        { name: 'Domestic Clients', href: '/household' },
    ];

    return (
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="section-header">
                <h1>Site Map</h1>
                <p>Easily navigate through all sections of our website.</p>
            </div>
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--light-gray)', padding: '2rem', borderRadius: '12px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
