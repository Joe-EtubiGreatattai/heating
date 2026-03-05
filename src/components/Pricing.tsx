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
                    <button className={`tab-btn ${activeTab === 'emergency' ? 'active' : ''}`} onClick={() => setActiveTab('emergency')}>Emergency</button>
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
                                <div className="price">£1,000<span>+ labour</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>Full day installation</li>
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
                                <li>General repairs</li>
                                <li>Radiator changes</li>
                                <li>Valve replacements</li>
                                <li>Leak repairs</li>
                                <li>Minimum 1 hour charge</li>
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
                                <div className="price">£70<span>/hour</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>2-hour minimum</li>
                                <li>Plus travel time</li>
                                <li>Large-scale systems</li>
                                <li>Out-of-hours available</li>
                                <li>Detailed invoicing</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Enquire Now</Link>
                        </div>

                        <div className="pricing-card featured">
                            <div className="pricing-header">
                                <h3>Day Rate</h3>
                                <div className="price">£280<span>/day</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>8-hour day</li>
                                <li>Major installations</li>
                                <li>Project work</li>
                                <li>Multiple engineers available</li>
                                <li>Site surveys included</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Get Project Quote</Link>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Property Management</h3>
                                <div className="price">£100<span>/hour</span></div>
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

                {activeTab === 'emergency' && (
                    <div className="pricing-grid" id="pricing-emergency">
                        <div className="pricing-card featured">
                            <div className="pricing-header">
                                <h3>Emergency Callout</h3>
                                <div className="price">£150<span>+ parts</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>24/7 availability</li>
                                <li>Fast response time</li>
                                <li>Diagnostic included</li>
                                <li>First hour labour</li>
                                <li>No fix, no fee options</li>
                            </ul>
                            <a href="tel:02046008746" className="btn btn-primary pricing-cta">Call Emergency</a>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Weekend Rate</h3>
                                <div className="price">£180<span>+ parts</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>Saturday & Sunday</li>
                                <li>No extra callout fee</li>
                                <li>Same quality service</li>
                                <li>Pre-booked available</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary pricing-cta">Book Weekend</Link>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Bank Holiday</h3>
                                <div className="price">£220<span>+ parts</span></div>
                            </div>
                            <ul className="pricing-features">
                                <li>All bank holidays</li>
                                <li>Emergency priority</li>
                                <li>Full diagnostic</li>
                                <li>Quality guaranteed</li>
                            </ul>
                            <a href="tel:02046008746" className="btn btn-primary pricing-cta">Emergency Line</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
