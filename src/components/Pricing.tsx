'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const API = 'https://direct-heating.duckdns.org/api';

interface PricingPlan {
    _id: string;
    tab: 'domestic' | 'commercial';
    name: string;
    price: string;
    priceUnit: string;
    featured: boolean;
    features: string[];
    ctaText: string;
    ctaLink: string;
}

const FALLBACK: PricingPlan[] = [
    { _id: '1', tab: 'domestic', name: 'Boiler Service', price: '£80', priceUnit: '/service', featured: false, features: ['Full boiler inspection', 'Gas pressure check', 'Flue & combustion analysis', 'Gas Safety Certificate', '12-month service record'], ctaText: 'Book Service', ctaLink: '/contact' },
    { _id: '2', tab: 'domestic', name: 'Boiler Quote', price: 'Free quotes available', priceUnit: '', featured: true, features: ['Full installation', 'Old boiler removal', 'New boiler & fittings', 'System flush & cleanse', '10-year warranty options', 'Building regs notification'], ctaText: 'Get a Quote', ctaLink: '/contact' },
    { _id: '3', tab: 'domestic', name: 'Hourly Rate', price: '£120', priceUnit: '/hour', featured: false, features: ['Boiler faults', 'Leak repairs', 'Plumbing issues', 'Heating system issues', 'Minimum 1 hour charge'], ctaText: 'Book Engineer', ctaLink: '/contact' },
    { _id: '4', tab: 'commercial', name: 'Commercial Rate', price: '£140', priceUnit: '/hour', featured: false, features: ['Plus travel time', 'Large-scale systems', 'Detailed invoicing'], ctaText: 'Enquire Now', ctaLink: '/contact' },
    { _id: '5', tab: 'commercial', name: 'Property Management', price: 'Competitive rates', priceUnit: '', featured: false, features: ['Agency rates', 'Multiple properties', 'Priority booking', 'Direct tenant liaison', 'Monthly billing available'], ctaText: 'Partner With Us', ctaLink: '/contact' },
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState<'domestic' | 'commercial'>('domestic');
    const [plans, setPlans] = useState<PricingPlan[]>([]);

    useEffect(() => {
        fetch(`${API}/cms/pricing`)
            .then(r => r.json())
            .then((data: PricingPlan[]) => {
                if (Array.isArray(data) && data.length > 0) {
                    const transformed = data.map(p => ({
                        ...p,
                        ctaText: p.ctaText === 'Get Quote' ? 'Get a Quote' : p.ctaText
                    }));
                    setPlans(transformed);
                } else {
                    setPlans(FALLBACK);
                }
            })
            .catch(() => setPlans(FALLBACK));
    }, []);

    const tabPlans = plans.filter(p => p.tab === activeTab);
    const hasDomestic = plans.some(p => p.tab === 'domestic');
    const hasCommercial = plans.some(p => p.tab === 'commercial');

    return (
        <section id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Transparent Pricing</h2>
                    <p>No hidden fees. Clear, competitive pricing for all our services. Get in touch for a detailed quote
                        tailored to your specific needs.</p>
                </div>

                <div className="pricing-tabs">
                    {hasDomestic && (
                        <button className={`tab-btn ${activeTab === 'domestic' ? 'active' : ''}`} onClick={() => setActiveTab('domestic')}>Domestic</button>
                    )}
                    {hasCommercial && (
                        <button className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`} onClick={() => setActiveTab('commercial')}>Commercial</button>
                    )}
                </div>

                <div className="pricing-grid">
                    {tabPlans.map(plan => (
                        <div key={plan._id} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
                            <div className="pricing-header">
                                <h3>{plan.name}</h3>
                                <div className="price">
                                    {plan.price}
                                    {plan.priceUnit && <span>{plan.priceUnit}</span>}
                                </div>
                            </div>
                            <ul className="pricing-features">
                                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                            <Link href={plan.ctaLink} className="btn btn-primary pricing-cta">{plan.ctaText}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
