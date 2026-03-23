'use client';

import { useState, useEffect } from 'react';

const API = 'https://direct-heating.duckdns.org/api';

interface FAQItem {
    _id: string;
    question: string;
    answer: string;
}

const FALLBACK: FAQItem[] = [
    { _id: '1', question: 'Why do I need to service my boiler?', answer: "You should have your boiler serviced annually. Not only will this ensure it's running efficiently and safely for the year ahead, but it will also validate any manufacturer's warranties you have on the appliance." },
    { _id: '2', question: 'Does my Boiler need replacing?', answer: 'Most boilers should last for 10+ years, depending on how well the boiler and system were installed and maintained. If your boiler is becoming unreliable and is frequently causing you problems then it may be time to upgrade to a new high efficiency boiler.' },
    { _id: '3', question: 'What areas do we cover?', answer: 'We cover London, Essex and Hertfordshire.' },
    { _id: '4', question: 'Are we Gas Safe Registered?', answer: 'All our engineers are Gas Safe Registered, ensuring all work is carried out safely.' },
];

export default function FAQ() {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API}/cms/faqs`)
            .then(r => r.json())
            .then((data: FAQItem[]) => {
                if (Array.isArray(data) && data.length > 0) setFaqs(data);
                else setFaqs(FALLBACK);
            })
            .catch(() => setFaqs(FALLBACK));
    }, []);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    if (faqs.length === 0) return null;

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Got a question? We&apos;ve got answers. Here are some of the most common queries from our customers.</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq) => (
                        <div
                            key={faq._id}
                            className={`faq-item ${openIndex === faq._id ? 'active' : ''}`}
                            onClick={() => toggleFAQ(faq._id)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">{openIndex === faq._id ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
