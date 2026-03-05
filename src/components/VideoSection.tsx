'use client';

export default function VideoSection() {
    const playVideo = () => {
        alert('Video player would open here. Embed your MP4 or YouTube video.');
    };

    return (
        <section className="video-section">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ color: 'white' }}>See Our Work</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Watch our team in action. Professional boiler installations
                        completed to the highest standards.</p>
                </div>

                <div className="video-container">
                    <div className="video-placeholder" onClick={playVideo}>
                        <div className="play-button">▶</div>
                    </div>
                </div>

                <p style={{ marginTop: '2rem', opacity: 0.8 }}>Full boiler installation timelapse - From removal to
                    commissioning</p>
            </div>
        </section>
    );
}
