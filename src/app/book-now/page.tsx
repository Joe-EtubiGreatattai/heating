import { Fragment, type ReactNode } from 'react';
import BookingCalendar from '@/components/BookingCalendar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default async function BookNowPage() {
    const sections = await getSections();
    const defaultOrder = ['bookNowNavbar', 'bookNowBooking', 'bookNowFooter'];
    const order = computeOrder(sections.bookNowOrder, defaultOrder);

    const renderers: Record<string, ReactNode> = {
        bookNowNavbar: <Navbar />,
        bookNowBooking: (
            <div className="page-top" style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--light-gray)' }}>
                <BookingCalendar />
            </div>
        ),
        bookNowFooter: <Footer />
    };

    return (
        <main>
            {order.map((key) => {
                const enabled = sections[key];
                if (enabled === false) return null;
                const node = renderers[key];
                if (!node) return null;
                return <Fragment key={key}>{node}</Fragment>;
            })}
        </main>
    );
}
