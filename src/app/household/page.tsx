import { Fragment, type ReactNode } from 'react';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';

export const metadata = {
    title: "Domestic Heating & Plumbing Solutions North London",
    description: "Professional heating and plumbing services for homeowners and Landlord across North London. Boiler installations, servicing, and emergency repairs.",
};

async function getSections() {
    try {
        const res = await fetch('https://direct-heating.duckdns.org/api/cms/sections', { cache: 'no-store' });
        const json = (await res.json()) as unknown;
        if (json && typeof json === 'object') return json as Record<string, unknown>;
        return {};
    } catch {
        return {};
    }
}

function computeOrder(raw: unknown, defaults: string[]) {
    const allowed = new Set(defaults);
    const next: string[] = [];
    const seen = new Set<string>();
    if (Array.isArray(raw)) {
        for (const v of raw) {
            if (typeof v !== 'string') continue;
            if (!allowed.has(v)) continue;
            if (seen.has(v)) continue;
            seen.add(v);
            next.push(v);
        }
    }
    for (const v of defaults) {
        if (!seen.has(v)) next.push(v);
    }
    return next;
}

export default async function HouseholdPage() {
    const sections = await getSections();
    const defaultOrder = ['householdIntro', 'householdServices', 'householdContact'];
    const order = computeOrder(sections.householdOrder, defaultOrder);

    const renderers: Record<string, ReactNode> = {
        householdIntro: (
            <>
                <div className="section-header">
                    <h1>Domestic Heating & Plumbing Solutions</h1>
                    <p>Reliable heating and plumbing services tailored for your home.</p>
                </div>

                <div className="segments-grid" style={{ marginBottom: '6rem' }}>
                    <div className="segment-card" style={{ cursor: 'default', background: 'var(--light-gray)', maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <div style={{ background: '#fcfcfc', padding: '0.8rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>🏠</div>
                            <h3>For Homeowners & Landlord</h3>
                        </div>
                        <p>Keep your family warm and safe with our reliable domestic services. From high-efficiency boiler installs to annual safety checks.</p>
                        <div className="segment-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                            <ul className="segment-features" style={{ color: 'var(--text-gray)' }}>
                                <li style={{ color: 'var(--text-gray)' }}>Annual Boiler Servicing</li>
                                <li style={{ color: 'var(--text-gray)' }}>Radiator & Valve Repairs</li>
                                <li style={{ color: 'var(--text-gray)' }}>Smart Home (Hive/Nest)</li>
                                <li style={{ color: 'var(--text-gray)' }}>Emergency Breakdowns</li>
                            </ul>
                            <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Domestic Rate:</strong> £80/Service</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Hourly Rate:</strong> £120/Hour</p>
                                <p><strong>Emergency Callout:</strong> £150 (First hour)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ),
        householdServices: (
            <div style={{ marginBottom: '4rem' }}>
                <div className="section-header">
                    <h2>Domestic Services</h2>
                </div>
                <Services />
            </div>
        ),
        householdContact: (
            <div style={{ marginTop: '4rem' }}>
                <ContactForm />
            </div>
        )
    };

    return (
        <div className="container page-top" style={{ paddingBottom: '4rem' }}>
            {order.map((key) => {
                const enabled = sections[key];
                if (enabled === false) return null;
                const node = renderers[key];
                if (!node) return null;
                return <Fragment key={key}>{node}</Fragment>;
            })}
        </div>
    );
}
