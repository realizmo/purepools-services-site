'use client';
/**
 * FreeEstimateForm
 * UI-only contact / estimate request form.
 * - Controlled inputs with client-side validation
 * - Simulated submit (no backend) showing a success state
 * - Paired with a left-side contact info card
 */
import { useState, type FormEvent } from 'react';
import { CONTACT } from '@/lib/data';
import styles from './FreeEstimateForm.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', service: '', message: '',
};

export default function FreeEstimateForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (s: FormState) => {
    const e: typeof errors = {};
    if (!s.name.trim()) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = 'Please enter a valid email.';
    if (s.phone && !/^[\d\s\-().+]{7,}$/.test(s.phone)) e.phone = 'Please enter a valid phone.';
    if (!s.message.trim() || s.message.trim().length < 10) e.message = 'Tell us a bit more (10+ characters).';
    return e;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus('submitting');
    // Simulated request — UI only per requirements.
    setTimeout(() => {
      setStatus('success');
      setData(INITIAL);
    }, 900);
  };

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((p) => ({ ...p, [k]: v }));

  return (
    <section className={styles.section} id="estimate" aria-label="Request a free estimate">
      <div className={`container ${styles.grid}`}>
        <aside className={styles.info}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title}>Request a Free Estimate</h2>
          <p className={styles.lead}>
            Tell us about your pool project and a PurePools Services team member will get back to you within one business day.
          </p>

          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>Phone</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              <span className={styles.infoLabel}>Email</span>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
            <li>
              <span className={styles.infoLabel}>Address</span>
              <span>{CONTACT.addressLine1}<br />{CONTACT.addressLine2}</span>
            </li>
          </ul>

          <a
            className="btn btn--navy"
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Directions
          </a>
        </aside>

        <form className={styles.form} onSubmit={onSubmit} noValidate aria-describedby="form-status">
          <div className={styles.row}>
            <Field label="Name" id="name" required error={errors.name}>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => update('name', e.target.value)}
                autoComplete="name"
                aria-invalid={!!errors.name}
                required
              />
            </Field>
            <Field label="Email" id="email" required error={errors.email}>
              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
                autoComplete="email"
                aria-invalid={!!errors.email}
                required
              />
            </Field>
          </div>

          <div className={styles.row}>
            <Field label="Phone" id="phone" error={errors.phone}>
              <input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => update('phone', e.target.value)}
                autoComplete="tel"
                aria-invalid={!!errors.phone}
              />
            </Field>
            <Field label="Service Needed" id="service">
              <select
                id="service"
                value={data.service}
                onChange={(e) => update('service', e.target.value)}
              >
                <option value="">Select a service…</option>
                <option>Pool Repair</option>
                <option>Pool Installation</option>
                <option>Pool Maintenance</option>
                <option>Pool Opening</option>
                <option>Pool Closing</option>
                <option>Other</option>
              </select>
            </Field>
          </div>

          <Field label="Tell us about your project" id="message" required error={errors.message}>
            <textarea
              id="message"
              rows={5}
              value={data.message}
              onChange={(e) => update('message', e.target.value)}
              aria-invalid={!!errors.message}
              required
            />
          </Field>

          <Field label="Upload File (optional)" id="file">
            <input id="file" type="file" />
          </Field>

          <div className={styles.actions}>
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Request'}
            </button>
            <p id="form-status" className={styles.status} role="status">
              {status === 'success' && '✓ Thanks! We will be in touch shortly.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}
function Field({ label, id, required, error, children }: FieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true" style={{ color: '#d33' }}>*</span>}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
