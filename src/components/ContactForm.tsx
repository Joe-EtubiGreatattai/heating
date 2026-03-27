'use client';

export default function ContactForm() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            service: formData.get('service'),
            customerType: formData.get('customerType'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('https://direct-heating.duckdns.org/api/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Thank you for your enquiry! We\'ll be in touch with you soon.');
                (e.target as HTMLFormElement).reset();
            } else {
                alert('Something went wrong. Please try again or call us directly.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Could not connect to the server. Please check your internet connection.');
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get Your Free Quote</h2>
                    <p>Ready to discuss your heating needs? Contact us today for a free, no-obligation quote.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Contact Direct Heating</h3>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>We&apos;re here to help with all your heating
                            and plumbing needs. Reach out via phone, email, or fill out the form.</p>

                        <div className="contact-methods">
                            <a href="tel:02046008746" className="contact-method">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <strong>0204 600 8746</strong>
                                </div>
                            </a>

                            <a href="mailto:info@directheatingltd.com" className="contact-method">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <strong>info@directheatingltd.com</strong>
                                </div>
                            </a>

                            <div className="contact-method">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <strong>North London</strong>
                                    <span>Serving N, NW, EN postcodes</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'var(--light-gray)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Why Choose Us?</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>✓ Gas Safe Registered Engineers</li>
                                <li>✓ Emergency Callouts</li>
                                <li>✓ Fixed Price Quotes</li>
                                <li>✓ 10-Year Warranties Available</li>
                                <li>✓ Fully Insured</li>
                            </ul>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name *</label>
                                <input name="firstName" type="text" required placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name *</label>
                                <input name="lastName" type="text" required placeholder="Smith" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone *</label>
                                <input name="phone" type="tel" required placeholder="0204 600 8746" />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input name="email" type="email" required placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Service Required *</label>
                            <select name="service" required>
                                <option value="">Select a service...</option>
                                <option value="install">Boiler Quote</option>
                                <option value="repair">Boiler Repair</option>
                                <option value="service">Annual Service</option>
                                <option value="emergency">Emergency Callout</option>
                                <option value="bathroom">Bathroom Installation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Customer Type *</label>
                            <select name="customerType" required>
                                <option value="">Select...</option>
                                <option value="domestic">Domestic/Homeowner</option>
                                <option value="landlord">Landlord</option>
                                <option value="commercial">Commercial Business</option>
                                <option value="property">Property Management</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Tell us about your requirements..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Send Enquiry
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}
