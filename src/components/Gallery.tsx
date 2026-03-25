'use client';

import { useMemo, useState, useEffect } from 'react';

const API = 'https://direct-heating.duckdns.org/api';
const MEDIA_ORIGIN = new URL(API).origin;

type Slide = {
    src: string;
    alt: string;
    caption: string;
};

const FALLBACK_SLIDES: Slide[] = [
    { src: 'https://direct-heating.duckdns.org/gallery-images/PHOTO-2026-02-05-09-30-10.jpg', alt: 'Boiler installation', caption: 'Expert boiler installations completed to the highest standards' },
    { src: 'https://direct-heating.duckdns.org/gallery-images/PHOTO-2026-02-01-17-23-19.jpg', alt: 'Heating system', caption: 'High-efficiency heating system upgrades' },
    { src: 'https://direct-heating.duckdns.org/gallery-images/PHOTO-2026-01-31-15-55-46.jpg', alt: 'Pipework', caption: 'Professional pipework and clean installation finish' },
];

export default function Gallery() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const normalizeImageSrc = (src: string) => {
        if (!src) return src;

        if (src.startsWith('/')) {
            return `${MEDIA_ORIGIN}${src}`;
        }

        try {
            const parsed = new URL(src);
            return `${MEDIA_ORIGIN}${parsed.pathname}`;
        } catch {
            return src;
        }
    };

    useEffect(() => {
        fetch(`${API}/cms/gallery`)
            .then(r => r.json())
            .then((data: Slide[]) => {
                if (Array.isArray(data) && data.length > 0) {
                    setSlides(data.map((item) => ({ ...item, src: normalizeImageSrc(item.src) })));
                    setActiveIndex(Math.min(2, data.length - 1));
                } else {
                    setSlides(FALLBACK_SLIDES.map((item) => ({ ...item, src: normalizeImageSrc(item.src) })));
                }
            })
            .catch(() => setSlides(FALLBACK_SLIDES.map((item) => ({ ...item, src: normalizeImageSrc(item.src) }))));
    }, []);

    const lastIndex = slides.length - 1;
    const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
    const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;

    const goPrev = () => setActiveIndex(prevIndex);
    const goNext = () => setActiveIndex(nextIndex);

    if (slides.length === 0) return null;

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
                            key={index}
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
