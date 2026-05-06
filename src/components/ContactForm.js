import React, { useState } from 'react';
import ContactDetails from './contactDetails';
import { useTranslation } from '../contexts/LanguageContext';

function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/xjvdgezn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-section">
      <div className="text-section">
        <div className="text_section_wrapper">
          <h2>
            {t.contact.title}
            <hr />
          </h2>
          <p>{t.contact.p1}</p>
        </div>
        <ContactDetails />
      </div>

      {status === 'success' ? (
        <div className="form-success">
          <p>{t.contact.successMessage || 'Your message was successfully sent!'}</p>
          <button
            type="button"
            className="button"
            onClick={() => setStatus('idle')}
          >
            <span>{t.contact.sendAnother || 'Send another message'}</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden="true" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="contact_details">
            <input type="text" name="name" placeholder={t.contact.fullName} className="input" required />
            <input type="text" name="phone" placeholder={t.contact.phone} className="input" />
            <input type="email" name="email" placeholder={t.contact.email} className="input" required />
          </div>
          <textarea name="message" placeholder={t.contact.message} rows="8" className="input" required />
          {status === 'error' && (
            <p className="form-error">{t.contact.errorMessage || 'Something went wrong. Please try again.'}</p>
          )}
          <button type="submit" className="button" disabled={status === 'sending'}>
            <span>{status === 'sending' ? (t.contact.sending || 'Sending…') : t.contact.send}</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
