import { Fragment, type ReactNode } from 'react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact Gas Safe Engineers in North London | Direct Heating Ltd",
    description: "Get a free, no-obligation quote for boiler installation or emergency repairs. Professional heating services serving all North London postcodes.",
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

export default async function ContactPage() {
    const sections = await getSections();
    const defaultOrder = ['contactContactForm'];
    const order = computeOrder(sections.contactOrder, defaultOrder);
    const renderers: Record<string, ReactNode> = {
        contactContactForm: <ContactForm />
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
