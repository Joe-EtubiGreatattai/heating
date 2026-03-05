import VideoSection from '@/components/VideoSection';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
    title: "How-To Videos & Project Timelapses | Direct Heating Ltd",
    description: "Watch our team in action. Pro boiler installations and helpful maintenance tips.",
};

export default function VideosPage() {
    return (
        <>
            <div className="container" style={{ paddingTop: '8rem' }}>
                <div className="section-header">
                    <h1>How-To Videos</h1>
                    <p>Helpful guides and a look behind the scenes of our professional installations.</p>
                </div>
            </div>
            <VideoSection />
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Boiler Maintenance 101</h3>
                        <p>Simple steps you can take to keep your boiler running smoothly.</p>
                        <span className="service-link">Watch Guide</span>
                    </div>
                    <div className="service-card">
                        <h3>Radiator Bleeding Guide</h3>
                        <p>How to safely bleed your radiators to improve heating efficiency.</p>
                        <span className="service-link">Watch Guide</span>
                    </div>
                    <div className="service-card">
                        <h3>Smart Home Integration</h3>
                        <p>See how we install Hive and Nest thermostats for modern homes.</p>
                        <span className="service-link">Watch Guide</span>
                    </div>
                </div>
            </div>
            <EmergencyCTA />
        </>
    );
}
