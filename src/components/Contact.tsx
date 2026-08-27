import React, { useState } from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px',
        background: theme.altBg,
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: 42,
              fontWeight: theme.headWeight,
              color: theme.fg,
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: 15,
              color: theme.fg2,
              lineHeight: 1.65,
              marginBottom: 48,
            }}
          >
            Open to frontend and software engineering opportunities in Austria, and remote teams.
          </p>
        </Reveal>
        {sent ? (
          <Reveal>
            <div
              style={{
                fontFamily: theme.body,
                fontSize: 15,
                color: theme.accent,
                padding: '24px',
                border: `1px solid ${theme.accent}44`,
                borderRadius: theme.cardRadius,
              }}
            >
              Message sent — I'll be in touch soon.
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {['name', 'email'].map((field) => (
                <input
                  key={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  value={form[field as keyof typeof form]}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [field]: e.target.value,
                    })
                  }
                  style={{
                    fontFamily: theme.body,
                    fontSize: 14,
                    color: theme.fg,
                    padding: '14px 18px',
                    background: theme.inputBg,
                    border: `1px solid ${theme.border}`,
                    borderRadius: theme.radius,
                    outline: 'none',
                  }}
                />
              ))}
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                style={{
                  fontFamily: theme.body,
                  fontSize: 14,
                  color: theme.fg,
                  padding: '14px 18px',
                  background: theme.inputBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.radius,
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: theme.body,
                  fontSize: 14,
                  padding: '14px',
                  background: theme.accent,
                  color: theme.accentFg,
                  border: 'none',
                  borderRadius: theme.radius,
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
              >
                Send message
              </button>
            </form>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 24,
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.fg2,
            }}
          >
            <a
              href="mailto:esabaliauskaite6@gmail.com"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              esabaliauskaite6@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/eglesabaliauskaite/"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/esabaliauskaite"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};