'use client';

import { useState } from 'react';

const faqs = [
    {
        question: "What areas in North London do you cover?",
        answer: "We cover all of North London and surrounding areas, including Islington, Camden, Barnet, Haringey, and Enfield. If you're unsure if we cover your location, feel free to give us a call."
    },
    {
        question: "Are your engineers Gas Safe registered?",
        answer: "Yes, absolutely. All our heating engineers are fully Gas Safe registered (formerly CORGI). We take safety extremely seriously and always carry our ID cards for your peace of mind."
    },
    {
        question: "Do you offer emergency callout services?",
        answer: "Yes, we provide emergency callout services for boiler breakdowns and urgent repairs. While we've updated our 24/7 availability, we still prioritize urgent issues to get your heating and hot water back on as quickly as possible."
    },
    {
        question: "How can I get a quote for a new boiler installation?",
        answer: "We offer free, no-obligation quotes for all new boiler installations. You can contact us via our website form, or call us to arrange a site survey where we can provide a fixed-price quote tailored to your home."
    },
    {
        question: "What warranties come with a new boiler installation?",
        answer: "As accredited installers for leading brands like Vaillant and Worcester Bosch, we can offer extended warranties of up to 10 or 12 years on new installations, giving you long-term peace of mind."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Got a question? We've got answers. Here are some of the most common queries from our customers.</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
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
