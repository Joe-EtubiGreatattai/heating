'use client';

import { useRef } from 'react';

export default function Testimonials() {
    const trackRef = useRef<HTMLDivElement | null>(null);

    const scrollByCard = (direction: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;

        const firstCard = track.querySelector<HTMLElement>('.testimonial-card');
        const cardWidth = firstCard?.getBoundingClientRect().width ?? 320;

        track.scrollBy({ left: direction * (cardWidth + 32), behavior: 'smooth' });
    };

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
                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">LP</div>
                            <div className="testimonial-meta">
                                <h4>Lucy Perry</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;Excellent service from start to finish. Responded quickly to an emergency call when my boiler
                            stopped working and water was pouring out. Alfie explored all repair options first, but the
                            boiler unfortunately needed replacing. Alfie managed to fit me in just a couple of days later
                            and completed the work to a very high standard at a reasonable price.&rdquo;</p>
                        <span className="testimonial-badge">Verified Customer</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">CH</div>
                            <div className="testimonial-meta">
                                <h4>Chloe Halls</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;Absolutely outstanding service from Direct Heating from start to finish. From the first point of
                            contact, communication was clear, professional, and friendly. The engineer arrived on time, was
                            extremely knowledgeable, and took the time to explain everything clearly without rushing or
                            using jargon. Everything was left spotless.&rdquo;</p>
                        <span className="testimonial-badge">Verified Customer</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">SF</div>
                            <div className="testimonial-meta">
                                <h4>Sabrina Fox</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;I needed an emergency plumber recently as my boiler wouldn&apos;t turn on. A friend recommended
                            Direct Heating Ltd, as she had used them herself. I couldn&apos;t recommend Louis enough. He was
                            polite, professional, and had my boiler back up and running the very same day. He clearly
                            explained the fault and provided a long-term solution.&rdquo;</p>
                        <span className="testimonial-badge">Emergency Callout</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">SC</div>
                            <div className="testimonial-meta">
                                <h4>Saj Chowdry</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;Alfie and Direct Heating were able to quickly identify and repair a fault to my boiler in my
                            flat in Islington N1. Courteous, fast and helpful, they are a credit to good trades everywhere.
                            Highly recommended.&rdquo;</p>
                        <span className="testimonial-badge">Islington, N1</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">ZS</div>
                            <div className="testimonial-meta">
                                <h4>Zac Skry</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;Alfie has done an amazing job with a Hive installation at our house. Would highly highly
                            recommend. Super reliable and professional!&rdquo;</p>
                        <span className="testimonial-badge">Smart Home Install</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">NC</div>
                            <div className="testimonial-meta">
                                <h4>Nick C</h4>
                                <div className="stars">★★★★★</div>
                            </div>
                        </div>
                        <p>&ldquo;Great service by Alfie today, repairing a bathroom radiator in North London. Good communication
                            and very reliable. Thank you&rdquo;</p>
                        <span className="testimonial-badge">North London</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
