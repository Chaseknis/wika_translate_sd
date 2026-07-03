import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './styles/quotation.css';
import ContactDetails from './contactDetails';
import { useTranslation } from '../contexts/LanguageContext';

function Quotation() {
  const { t } = useTranslation();
  const qt = t.quotation;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    organization: '',
    service: '',
    sourceLanguage: '',
    targetLanguage: '',
    message: '',
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const {
      name, email, sourceLanguage, targetLanguage, message,
    } = formData;

    if (!name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!sourceLanguage.trim() || !targetLanguage.trim()) {
      setError('Source and Target languages are required');
      return false;
    }
    if (!message.trim()) {
      setError('Message is required');
      return false;
    }

    setError('');
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'file' && !formData[key]) return;
      form.append(key, formData[key]);
    });
    form.append('phone', phone);
    form.append('location', country.value);

    try {
      const response = await fetch('https://getform.io/f/amdpvqrb', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          organization: '',
          service: '',
          sourceLanguage: '',
          targetLanguage: '',
          message: '',
          file: null,
        });
        setPhone('');
        setCountry(null);
        setSuccessMessage('Form submitted successfully!');
      } else {
        setError('Form submission failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quotation-form">
      <div className="text-section">
        <div className="text_section_wrapper">
          <h2>
            {qt.title}
            <hr />
          </h2>
          <p>{qt.p1}</p>
        </div>
        <ContactDetails />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data">
        <div className="quotation_input_wrapper">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://127.0.0.1:5555/#contact-us" />

          <input
            type="text"
            name="name"
            placeholder={qt.fullName}
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <PhoneInput
            country="us"
            value={phone}
            onChange={(p) => setPhone(p)}
            inputClass="input"
            className="phone_input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={qt.email}
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <Select
          inputId="quotation-country"
          aria-label={qt.country}
          options={countryList().getData()}
          value={country}
          onChange={setCountry}
          placeholder={qt.country}
          className="select_country"
          required
        />

        <div className="quotation_input_wrapper">
          <input
            type="text"
            name="organization"
            placeholder={qt.organization}
            className="input"
            value={formData.organization}
            onChange={handleChange}
          />

          <label htmlFor="quotation-service" className="quotation_select_label">
            {qt.service}
            <select
              id="quotation-service"
              name="service"
              aria-label={qt.service}
              className="input"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>{qt.service}</option>
              <option value="translation">{qt.serviceOptions.translation}</option>
              <option value="interpretation">{qt.serviceOptions.interpretation}</option>
              <option value="subtitling">{qt.serviceOptions.subtitling}</option>
              <option value="transcription">{qt.serviceOptions.transcription}</option>
              <option value="localization">{qt.serviceOptions.localization}</option>
              <option value="online-interpretation">{qt.serviceOptions.onlineInterpretation}</option>
            </select>
          </label>
        </div>

        <div className="quotation_input_wrapper">
          <input
            type="text"
            name="sourceLanguage"
            placeholder={qt.sourceLanguage}
            className="input"
            value={formData.sourceLanguage}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="targetLanguage"
            placeholder={qt.targetLanguage}
            className="input"
            value={formData.targetLanguage}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="file"
            className="input file_upload"
            onChange={handleFileChange}
          />
        </div>

        <textarea
          name="message"
          placeholder={qt.message}
          rows="8"
          className="input"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="button" disabled={isSubmitting}>
          <span>{isSubmitting ? qt.sending : qt.send}</span>
        </button>
      </form>
    </div>
  );
}

export default Quotation;
