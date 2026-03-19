'use client';

import { useMemo, useState } from 'react';

type Slide = {
    src: string;
    alt: string;
    caption: string;
};

export default function Gallery() {
    const slides: Slide[] = useMemo(
        () => [
            { src: '/gallery-images/PHOTO-2026-02-05-09-30-10.jpg', alt: 'Boiler installation', caption: 'Expert boiler installations completed to the highest standards' },
            { src: '/gallery-images/PHOTO-2026-02-01-17-23-19.jpg', alt: 'Heating system', caption: 'High-efficiency heating system upgrades' },
            { src: '/gallery-images/PHOTO-2026-01-31-15-55-46.jpg', alt: 'Pipework', caption: 'Professional pipework and clean installation finish' },
            { src: '/gallery-images/PHOTO-2026-01-31-15-13-16.jpg', alt: 'Plumbing repair', caption: 'Reliable plumbing repairs for modern homes' },
            { src: '/gallery-images/PHOTO-2025-10-17-19-23-20 (1).jpg', alt: 'Site work', caption: 'Detailed site assessments and quality plumbing' },
            { src: '/gallery-images/PHOTO-2025-10-17-19-24-19 (1).jpg', alt: 'Installation', caption: 'High-quality components and expert fitting' },
            { src: '/gallery-images/PHOTO-2025-10-17-19-24-19 (2).jpg', alt: 'Detail work', caption: 'Precision engineering in every project' },
            { src: '/gallery-images/PHOTO-2025-10-17-19-24-19.jpg', alt: 'Completed project', caption: 'Professional finishes on all heating projects' },
            { src: '/gallery-images/0db48f8d-fbda-472c-ab68-3a961d7eba27.JPG', alt: 'Bathroom project', caption: 'Beautifully finished bathroom plumbing' },
            { src: '/gallery-images/4dfc120a-1c14-4c38-8dcf-ec3236cd4ecf.JPG', alt: 'General maintenance', caption: 'Routine maintenance and servicing work' },
            { src: '/gallery-images/61a58f1c-85a7-4786-b625-88eaffed559b.JPG', alt: 'Heating component', caption: 'Expert fitting of advanced heating controls' },
            { src: '/gallery-images/6fee69d8-3183-4002-a65b-cb97f61cb3cc.JPG', alt: 'Repair job', caption: 'Emergency repairs and part replacements' },
            { src: '/gallery-images/8f0468d6-0316-4441-8524-1d8c10610af6.JPG', alt: 'Water system', caption: 'Hot water cylinder and system upgrades' },
            { src: '/gallery-images/96ebc59b-20ab-41ae-941a-4a36398970d4.JPG', alt: 'Underfloor heating', caption: 'Specialized heating system installations' },
            { src: '/gallery-images/97681aba-02fd-4ce2-a528-13059335ea0e.JPG', alt: 'Customer service', caption: 'Professional service and clear communication' },
            { src: '/gallery-images/9a033b09-a1fd-4246-b760-fa2d242fc13a.JPG', alt: 'System testing', caption: 'Rigorous testing of all new installations' },
            { src: '/gallery-images/a1c66160-853c-4456-85fe-857347f26e8c.JPG', alt: 'Local plumbing', caption: 'Serving residential properties across North London' },
            { src: '/gallery-images/b272a2b9-3dfd-4d7f-af38-4b34167722cb.JPG', alt: 'Expertise', caption: 'Over a decade of industry-leading experience' },
            { src: '/gallery-images/eb5c508a-45bf-441d-a40b-255c8acb8109.JPG', alt: 'Safety', caption: 'Gas Safe registered and fully insured' },
            { src: '/gallery-images/f7688f7b-4af8-4ca4-807a-5098fbf055bf.JPG', alt: 'Modern boilers', caption: 'Specialists in modern, high-efficiency boilers' },
            { src: '/gallery-images/Screenshot 2025-09-25 at 4.13.53 PM.png', alt: 'Enquiry form', caption: 'Easy online booking and fast responses' },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(2);

    const lastIndex = slides.length - 1;
    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;

    const goPrev = () => setActiveIndex(prevIndex);
    const goNext = () => setActiveIndex(nextIndex);

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header gallery-header">
                    <span className="section-subtitle">Our Work</span>
                    <h2>Gallery</h2>
                    <p>A glimpse of recent installations, repairs and plumbing projects completed by Direct Heating.</p>
                </div>

                <div className="gallery-shell" aria-label="Project photo gallery">
                    <button type="button" className="gallery-nav gallery-nav-left" onClick={goPrev} aria-label="Previous photo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="gallery-carousel" aria-live="polite">
                        <div className="gallery-slide is-side" aria-hidden="true">
                            <img className="gallery-image" src={slides[prevIndex].src} alt="" />
                        </div>

                        <div className="gallery-slide is-active">
                            <img className="gallery-image" src={slides[activeIndex].src} alt={slides[activeIndex].alt} />

                            <div className="gallery-brand">
                                <img className="gallery-brand-logo" src="/Logo tsp white.png" alt="Direct Heating" />
                                <a className="gallery-brand-phone" href="tel:02046008746">
                                    0204 600 8746
                                </a>
                            </div>

                            <div className="gallery-caption">
                                <div className="gallery-caption-text">{slides[activeIndex].caption}</div>
                            </div>
                        </div>

                        <div className="gallery-slide is-side" aria-hidden="true">
                            <img className="gallery-image" src={slides[nextIndex].src} alt="" />
                        </div>
                    </div>

                    <button type="button" className="gallery-nav gallery-nav-right" onClick={goNext} aria-label="Next photo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="gallery-dots" aria-label="Select photo">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.alt}
                            type="button"
                            className={index === activeIndex ? 'gallery-dot is-active' : 'gallery-dot'}
                            aria-label={`Show photo ${index + 1}`}
                            aria-pressed={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
