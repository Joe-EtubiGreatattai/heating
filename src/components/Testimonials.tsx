'use client';

import { useRef, useEffect, useState } from 'react';

const API = 'https://direct-heating.duckdns.org/api';

interface Testimonial {
    _id: string;
    name: string;
    initials: string;
    review: string;
    badge: string;
    rating: number;
}

const FALLBACK: Testimonial[] = [
    { _id: '1', name: 'Lucy Perry', initials: 'LP', review: 'Excellent service from start to finish. Responded quickly to an emergency call when my boiler stopped working and water was pouring out. Alfie managed to fit me in just a couple of days later and completed the work to a very high standard at a reasonable price.', badge: 'Verified Customer', rating: 5 },
    { _id: '2', name: 'Chloe Halls', initials: 'CH', review: 'Absolutely outstanding service from Direct Heating from start to finish. Communication was clear, professional, and friendly. The engineer arrived on time, was extremely knowledgeable, and took the time to explain everything clearly. Everything was left spotless.', badge: 'Verified Customer', rating: 5 },
    { _id: '3', name: 'Sabrina Fox', initials: 'SF', review: "I couldn't recommend Louis enough. He was polite, professional, and had my boiler back up and running the very same day. He clearly explained the fault and provided a long-term solution.", badge: 'Emergency Callout', rating: 5 },
    { _id: '4', name: 'Saj Chowdry', initials: 'SC', review: 'Alfie and Direct Heating were able to quickly identify and repair a fault to my boiler in my flat in Islington N1. Courteous, fast and helpful, they are a credit to good trades everywhere. Highly recommended.', badge: 'Islington, N1', rating: 5 },
    { _id: '5', name: 'Zac Skry', initials: 'ZS', review: 'Alfie has done an amazing job with a Hive installation at our house. Would highly highly recommend. Super reliable and professional!', badge: 'Smart Home Install', rating: 5 },
    { _id: '6', name: 'Nick C', initials: 'NC', review: 'Great service by Alfie today, repairing a bathroom radiator in North London. Good communication and very reliable. Thank you', badge: 'North London', rating: 5 },
];

export default function Testimonials() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        fetch(`${API}/cms/testimonials`)
            .then(r => r.json())
            .then((data: Testimonial[]) => {
                if (Array.isArray(data) && data.length > 0) setTestimonials(data);
                else setTestimonials(FALLBACK);
            })
            .catch(() => setTestimonials(FALLBACK));
    }, []);

    const scrollByCard = (direction: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;
        const firstCard = track.querySelector<HTMLElement>('.testimonial-card');
        const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;
        track.scrollBy({ left: direction * (cardWidth + 32), behavior: 'smooth' });
    };

    if (testimonials.length === 0) return null;

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Don&apos;t just take our word for it. Here&apos;s what homeowners, businesses, and property managers say about
                        working with Direct Heating.</p>
                </div>

                <div className="testimonials-carousel-controls">
                    <button type="button" className="carousel-btn" aria-label="Previous testimonial" onClick={() => scrollByCard(-1)}>
                        ‹
                    </button>
                    <button type="button" className="carousel-btn" aria-label="Next testimonial" onClick={() => scrollByCard(1)}>
                        ›
                    </button>
                </div>

                <div className="testimonials-grid" ref={trackRef}>
                    {testimonials.map(t => (
                        <div key={t._id} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{t.initials}</div>
                                <div className="testimonial-meta">
                                    <h4>{t.name}</h4>
                                    <div className="stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                                </div>
                            </div>
                            <p>&ldquo;{t.review}&rdquo;</p>
                            <span className="testimonial-badge">{t.badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
