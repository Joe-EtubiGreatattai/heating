import TrustBar from '@/components/TrustBar';

export const metadata = {
    title: "About Us | Direct Heating Ltd",
    description: "Learn more about Direct Heating Ltd, your trusted Gas Safe registered heating engineers in North London.",
};

async function getSections() {
    try {
        const res = await fetch('https://direct-heating.duckdns.org/api/cms/sections', { cache: 'no-store' });
        const json = (await res.json()) as unknown;
        if (json && typeof json === 'object') return json as Record<string, boolean>;
        return {};
    } catch {
        return {};
    }
}

export default async function AboutPage() {
    const sections = await getSections();
    const showContent = sections.aboutContent ?? true;
    const showTrustBar = sections.aboutTrustBar ?? true;

    return (
        <div className="container page-top" style={{ paddingBottom: '4rem' }}>
            {showContent && (
                <>
                    <div className="section-header">
                        <h1>About Direct Heating Ltd</h1>
                        <p>Your local experts in heating and plumbing for over [Number] years.</p>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-gray)' }}>
                        <p>At Direct Heating Ltd, we pride ourselves on providing high-quality, reliable heating and plumbing services to homeowners, businesses, and property managers across North London.</p>
                        <p>Our team of Gas Safe registered engineers is dedicated to ensuring your safety and comfort. Whether it&apos;s a routine boiler service, a complex commercial installation, or an emergency 2am callout, we bring the same level of professionalism and expertise to every job.</p>
                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Our Values</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><strong>Quality:</strong> We use only the best materials and follow industry best practices.</li>
                            <li><strong>Reliability:</strong> We show up on time and get the job done right.</li>
                            <li><strong>Transparency:</strong> No hidden fees. Just honest, competitive pricing.</li>
                            <li><strong>Safety:</strong> Your safety is our top priority. All our engineers are Gas Safe registered.</li>
                        </ul>
                    </div>
                </>
            )}
            {showTrustBar && <TrustBar />}
        </div>
    );
}
