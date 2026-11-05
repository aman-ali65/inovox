import { useState } from 'react';

const defaultFaqs = [
  {
    q: 'What services do you offer?',
    a: 'We offer web development, UI/UX design, mobile applications, branding, backend & APIs, cloud solutions, and custom software development.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines depend on scope. Most websites take a few weeks; larger products are planned in milestones during the Plan stage.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We work with clients around the world and collaborate across time zones.',
  },
  {
    q: 'What if I need ongoing support?',
    a: 'We offer post-launch support and maintenance so your product keeps performing.',
  },
  {
    q: 'How do we start a project?',
    a: 'Send us a message through the contact page and we will reply within 24 hours to schedule a discovery call.',
  },
];

export default function FAQAccordion({ items = defaultFaqs }) {
  // First item open by default matching original class=on
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="acc">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={isOpen ? 'on' : ''}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
            >
              {item.q}
              <span className="pl">
                <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <p>{item.a}</p>
          </div>
        );
      })}
    </div>
  );
}
