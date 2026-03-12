import React from 'react';

export default function SelfFixFaults() {
    return (
        <section id="self-fix-faults" className="services-section bg-light">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Troubleshooting</span>
                    <h2>Common Faults You Can Fix Yourself</h2>
                    <p>Before calling an engineer, check these common issues that you might be able to resolve quickly and safely.</p>
                </div>

                <div className="services-new-grid">
                    {/* Pressure Issue */}
                    <div className="service-card-modern">
                        <div className="card-icon-wrapper" style={{ background: 'rgba(255, 107, 107, 0.1)', color: '#ff6b6b' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div className="card-content">
                            <h3>Pressure Issue</h3>
                            <p style={{ marginBottom: '1rem' }}>If your boiler is showing a fault code, check the pressure gauge. If the pressure is low, this may be the cause of the fault.</p>
                            <p style={{ marginBottom: '1rem' }}>If you know how and feel confident doing so, you can top up the pressure using the filling loop. The ideal pressure for most systems is <strong>between 1 and 1.5 bar</strong>.</p>
                            <p style={{ marginBottom: '1rem' }}>Once the pressure has been topped up, you may need to <strong>reset the boiler</strong>, which could resolve the issue without needing an engineer visit.</p>
                            <p>If the pressure continues to drop, this could indicate a <strong>larger underlying issue</strong>, so please give us a call before the problem worsens.</p>
                        </div>
                    </div>

                    {/* Cold Radiator */}
                    <div className="service-card-modern">
                        <div className="card-icon-wrapper" style={{ background: 'rgba(74, 144, 226, 0.1)', color: '#4a90e2' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2h14v2H5z"></path><path d="M5 20h14v2H5z"></path><path d="M6 4v16"></path><path d="M10 4v16"></path><path d="M14 4v16"></path><path d="M18 4v16"></path><path d="M1 10h4"></path><path d="M19 10h4"></path></svg>
                        </div>
                        <div className="card-content">
                            <h3>Cold Radiator</h3>
                            <p style={{ marginBottom: '1rem' }}>If one or more of your radiators are <strong>hot at the bottom but cold at the top</strong>, this is often caused by <strong>air trapped inside the radiator</strong>.</p>
                            <p style={{ marginBottom: '1rem' }}>If you know how to <strong>bleed a radiator</strong>, releasing the trapped air may resolve the issue.</p>
                            <p>Please note that bleeding radiators can sometimes <strong>lower the pressure in your heating system</strong>, so you may need to <strong>top the boiler pressure back up afterwards</strong>. Only do this if you feel confident doing so.</p>
                        </div>
                    </div>

                    {/* Thermostat Screen Not Working */}
                    <div className="service-card-modern">
                        <div className="card-icon-wrapper" style={{ background: 'rgba(245, 166, 35, 0.1)', color: '#f5a623' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        </div>
                        <div className="card-content">
                            <h3>Thermostat Screen Not Working</h3>
                            <p style={{ marginBottom: '1rem' }}>Most modern heating systems use <strong>wireless thermostats</strong>, which are powered by batteries.</p>
                            <p>If the thermostat screen is blank or not responding, try <strong>replacing the batteries</strong>. This often resolves the issue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
