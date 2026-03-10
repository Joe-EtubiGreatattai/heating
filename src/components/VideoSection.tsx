'use client';

import { useState } from 'react';

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="video-section">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: 'white' }}>See Our Work</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Watch our team in action. Professional boiler installations
                        completed to the highest standards.</p>
                </div>

                <div className="video-container">
                    {!isPlaying ? (
                        <div className="video-placeholder" onClick={() => setIsPlaying(true)}>
                            <div className="play-button">▶</div>
                        </div>
                    ) : (
                        <video
                            className="active-video"
                            src="/3dcac2a6-1b34-4cf5-9098-d7f932c27811.MP4"
                            controls
                            autoPlay
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    )}
                </div>

                <p style={{ marginTop: '2rem', opacity: 0.8 }}>Full boiler installation timelapse - From removal to
                    commissioning</p>
            </div>
        </section>
    );
}
