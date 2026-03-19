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
            {
                src: '/hero.png',
                alt: 'Boiler installation photo',
                caption: 'Boiler installations completed to a high standard',
            },
            {
                src: '/hero.png',
                alt: 'Bathroom plumbing photo',
                caption: 'Beautiful bathrooms expertly installed',
            },
            {
                src: '/hero.png',
                alt: 'Heating system photo',
                caption: 'Reliable heating upgrades for modern homes',
            },
            {
                src: '/hero.png',
                alt: 'Pipework photo',
                caption: 'Neat, tidy pipework and professional finishes',
            },
            {
                src: '/hero.png',
                alt: 'Service visit photo',
                caption: 'Servicing and repairs across North London',
            },
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
