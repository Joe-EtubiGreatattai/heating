'use client';

import { useState } from 'react';

const faqs = [
    {
        question: "Why do I need to service my boiler?",
        answer: "You should have your boiler serviced annually. Not only will this ensure it&apos;s running efficiently and safely for the year ahead, but it will also validate any manufacturer&apos;s warranties you have on the appliance. Regular maintenance minimises the risk of costly breakdown and helps lengthen the lifespan of your boiler too."
    },
    {
        question: "Does my Boiler need replacing?",
        answer: "Most boilers should last for 10+ years, depending on how well the boiler and system were installed and maintained. If your boiler is becoming unreliable and is frequently causing you problems then it may be time to upgrade to a new high efficiency boiler."
    },
    {
        question: "What is a Combi Boiler?",
        answer: "A combi boiler delivers both heating and hot water without the need for a separate storage tank. It&apos;s an ideal choice for homes with limited space and can help reduce energy costs by heating water only when it&apos;s needed, rather than warming an entire tank that may not be fully used."
    },
    {
        question: "What areas do we cover?",
        answer: "We cover London, Essex and Hertfordshire."
    },
    {
        question: "How quickly can we attend to a call-out?",
        answer: "We aim to attend on the same day whenever possible, depending on the time you contact us and our current schedule. If the same-day attendance isn&apos;t available, we will book you in for the next available appointment. Emergency call-outs will be prioritised where possible."
    },
    {
        question: "Are we Gas Safe Registered?",
        answer: "All our engineers are Gas Safe Registered, ensuring all work is carried out safely."
    },
    {
        question: "How long does a boiler installation take?",
        answer: "Most standard boiler installations can be completed within one day, although more complex systems can take longer."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including bank transfers and card payments."
    },
    {
        question: "My boiler has a low pressure fault code, what should I do?",
        answer: "First, check the pressure gauge. The ideal pressure for most systems is between 1 and 1.5 bar. If it's low, you can top it up using the filling loop and then reset the boiler. If the pressure continues to drop, please call us to investigate as this could indicate a larger underlying issue."
    },
    {
        question: "Why is my radiator hot at the bottom but cold at the top?",
        answer: "This is usually caused by air trapped inside the radiator. Releasing the air by bleeding the radiator may resolve the issue. Note that bleeding radiators can lower system pressure, so you might need to top the boiler pressure back up afterwards."
    },
    {
        question: "My wireless thermostat screen is blank, what should I check?",
        answer: "Most wireless thermostats are battery-powered. If the screen is blank or unresponsive, try replacing the batteries. This often resolves the issue immediately without needing an engineer visit."
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
                    <p>Got a question? We&apos;ve got answers. Here are some of the most common queries from our customers.</p>
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
