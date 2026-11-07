import { useState } from 'react';

export default function NewsletterForm({ variant = 'compact' }) {
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState({ text: '', isSuccess: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = email.trim() !== '' && /^\S+@\S+\.\S+$/.test(email);

    if (!isValid) {
      setHasError(true);
      setStatus({
        text: 'Please fill in the highlighted fields.',
        isSuccess: false,
      });
      return;
    }

    setHasError(false);
    setStatus({
      text: 'Thanks for subscribing!',
      isSuccess: true,
    });
    setEmail('');

    // TODO: Future backend integration: Connect to PHP/MySQL backend API endpoint
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (hasError) setHasError(false);
  };

  if (variant === 'banner') {
    return (
      <form data-form="news" onSubmit={handleSubmit} noValidate className="blog-newsletter-form">
        <div className="blog-newsletter-row">
          <div className="blog-newsletter-input-wrap">
            <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Email"
              value={email}
              onChange={handleChange}
              className={hasError ? 'err' : ''}
            />
          </div>
          <button className="blog-subscribe-btn" type="submit" aria-label="Subscribe">
            <span>Subscribe</span>
            <svg className="i blog-subscribe-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="checks">
          <span>
            <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6" />
            </svg>
            No spam
          </span>
          <span>
            <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6" />
            </svg>
            Weekly updates
          </span>
          <span>
            <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12l3 3 5-6" />
            </svg>
            Unsubscribe anytime
          </span>
        </div>
        <div
          className="fmsg"
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: '8px',
            fontSize: '12px',
            color: status.isSuccess ? '#16794c' : '#e5484d',
          }}
        >
          {status.text}
        </div>
      </form>
    );
  }

  // Compact variant (Footer)
  return (
    <form data-form="news" onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="email"
          placeholder="Your Email Address"
          required
          aria-label="Email"
          value={email}
          onChange={handleChange}
          className={hasError ? 'err' : ''}
        />
        <button aria-label="Subscribe" type="submit">
          <svg className="i " viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div
        className="fmsg"
        style={{
          fontSize: '11px',
          marginTop: '6px',
          color: status.isSuccess ? '#16794c' : '#e5484d',
        }}
      >
        {status.text}
      </div>
    </form>
  );
}
