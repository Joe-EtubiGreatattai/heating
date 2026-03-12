import Link from 'next/link';

const services = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        ),
        title: "Boiler Installation",
        description: "Expert installation of Vaillant, Glow-worm, Worcester Bosch and other leading brands. 10-year warranties available.",
        link: "/contact",
        cta: "Get Quote",
        label: "Premium"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
        ),
        title: "Boiler Servicing",
        description: "Annual servicing to keep your boiler running efficiently and safely. Gas Safety Checks included. Prevent breakdowns.",
        link: "/contact",
        cta: "Book Service",
        label: "Essential"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        ),
        title: "Emergency Repairs",
        description: "Emergency callout for boiler breakdowns. Fast response times. We diagnose and fix problems quickly.",
        link: "tel:02046008746",
        cta: "Call Now",
        isExternal: true,
        label: "Emergency"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9V3m4.2 8.2l4.3-4.3m-12.7 0l4.3 4.3M12 12V3m0 9l4.2 4.2m-8.4 0L12 12z" /><circle cx="12" cy="12" r="9" /></svg>
        ),
        title: "Underfloor Heating",
        description: "Installation and servicing of energy-efficient underfloor heating solutions for modern homes.",
        link: "/contact",
        cta: "Learn More"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
        ),
        title: "Hot Water Cylinders",
        description: "Installation and repair of unvented/vented cylinders. High-quality brands supplied and fitted.",
        link: "/contact",
        cta: "Get Quote"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        ),
        title: "Plumbing Services",
        description: "From leak repairs to new installations, our Gas Safe engineers handle all your domestic plumbing needs.",
        link: "/contact",
        cta: "Book Now"
    }
];

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2>Our Services</h2>
                    <p>Comprehensive heating and plumbing solutions delivered with expertise and care.</p>
                </div>

                <div className="services-new-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card-modern">
                            {service.label && <span className="card-badge">{service.label}</span>}
                            <div className="card-icon-wrapper">
                                {service.icon}
                            </div>
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                {service.isExternal ? (
                                    <a href={service.link} className="card-cta">
                                        {service.cta} <span>→</span>
                                    </a>
                                ) : (
                                    <Link href={service.link} className="card-cta">
                                        {service.cta} <span>→</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
