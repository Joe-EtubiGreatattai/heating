import { Fragment, type ReactNode } from 'react';
import Services from '@/components/Services';
import EmergencyCTA from '@/components/EmergencyCTA';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Expert Boiler Installation & Servicing North London",
    description: "Gas Safe registered heating engineers for high-efficiency boiler installations, annual servicing, and emergency repairs across North London.",
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

export default async function ServicesPage() {
    const sections = await getSections();
    const defaultOrder = ['servicesServices', 'servicesEmergencyCta', 'servicesContact'];
    const order = computeOrder(sections.servicesOrder, defaultOrder);
    const renderers: Record<string, ReactNode> = {
        servicesServices: <Services />,
        servicesEmergencyCta: <EmergencyCTA />,
        servicesContact: <ContactForm />
    };

    return (
        <div className="page-top">
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
