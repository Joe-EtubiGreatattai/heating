'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('domestic');

    return (
        <section id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Transparent Pricing</h2>
                    <p>No hidden fees. Clear, competitive pricing for all our services. Get in touch for a detailed quote
                        tailored to your specific needs.</p>
                </div>

                <div className="pricing-tabs">
                    <button className={`tab-btn ${activeTab === 'domestic' ? 'active' : ''}`} onClick={() => setActiveTab('domestic')}>Domestic</button>
                    <button className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`} onClick={() => setActiveTab('commercial')}>Commercial</button>

                </div>

                {activeTab === 'domestic' && (
                    <div className="pricing-grid" id="pricing-domestic">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Boiler Service</h3>
                                <div className="price">£80<span>/service</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>Full boiler inspection</li>
                                <li>Gas pressure check</li>
                                <li>Flue & combustion analysis</li>
                                <li>Gas Safety Certificate</li>
                                <li>12-month service record</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Book Service</Link>
                        </div>

                        <div className="pricing-card featured">
                            <div className="pricing-header">
                                <h3>Boiler Installation</h3>
                                <div className="price">Free quotes available</div>
                            </div>
                            <ul className="pricing-features">
                                <li>Full installation</li>
                                <li>Old boiler removal</li>
                                <li>New boiler & fittings</li>
                                <li>System flush & cleanse</li>
                                <li>10-year warranty options</li>
                                <li>Building regs notification</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Get Quote</Link>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Hourly Rate</h3>
                                <div className="price">£120<span>/hour</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>Boiler faults</li>
                                <li>leak repairs</li>
                                <li>plumbing issues</li>
                                <li>heating system issues</li>
                                <li>minimum 1hour charge</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Book Engineer</Link>
                        </div>
                    </div>
                )}

                {activeTab === 'commercial' && (
                    <div className="pricing-grid" id="pricing-commercial">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Commercial Rate</h3>
                                <div className="price">£140<span>/hour</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>Plus travel time</li>
                                <li>Large-scale systems</li>
                                <li>Detailed invoicing</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Enquire Now</Link>
                        </div>


                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Property Management</h3>
                                <div className="price">competitive rates</div>
                            </div>
                            <ul className="pricing-features">
                                <li>Agency rates</li>
                                <li>Multiple properties</li>
                                <li>Priority booking</li>
                                <li>Direct tenant liaison</li>
                                <li>Monthly billing available</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Partner With Us</Link>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
}
