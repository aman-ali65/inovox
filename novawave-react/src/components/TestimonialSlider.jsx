import { useState } from 'react';

export default function TestimonialSlider({
  slides = [
    {
      text: 'Invsol Tech delivered an exceptional website for our brand. Their team understood our vision perfectly and transformed it into a modern, high-performing digital experience.',
      name: 'Ahmed Raza',
      role: 'Founder, Svaa App',
      avatar: '/assets/img/av-home.png',
    },
    {
      text: 'Professional, creative, and reliable. The team turned our rough idea into a polished product and kept us in the loop at every step.',
      name: 'Sarah Khan',
      role: 'CEO, Svaa',
      avatar: '/assets/img/av-home.png',
    },
    {
      text: 'From strategy to launch, the process was clear and collaborative. We saw real results soon after going live.',
      name: 'Ayesha Malik',
      role: 'Product Lead, Nexora',
      avatar: '/assets/img/av-home.png',
    },
  ],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = slides.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const countDisplay = `0${currentIndex + 1} / 0${total}`;

  return (
    <div className="quote">
      {slides.map((slide, index) => {
        const isCurrent = index === currentIndex;
        return (
          <div key={index} className={`slide ${isCurrent ? 'on' : ''}`}>
            <span className="q">“</span>
            <p>{slide.text}</p>
            <div className="who">
              <img src={slide.avatar} alt="" />
              <div>
                <b>{slide.name}</b>
                <small>{slide.role}</small>
              </div>
            </div>
          </div>
        );
      })}
      <div className="arrows">
        <span className="count">{countDisplay}</span>
        <button
          type="button"
          data-dir="-1"
          aria-label="Previous"
          onClick={handlePrev}
        >
          <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="f"
          data-dir="1"
          aria-label="Next"
          onClick={handleNext}
        >
          <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
