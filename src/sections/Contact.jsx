import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle, FiSend } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { socials } from '../data/experience';

// Create a free account at https://www.emailjs.com, then fill these three IDs.
// Until then, the form falls back to opening the visitor's email client.
const EMAILJS_SERVICE_ID = 'service_wme8o4c';
const EMAILJS_TEMPLATE_ID = 'template_qka1a77';
const EMAILJS_PUBLIC_KEY = '_wbg6YpTS0KM6tWNX';

const SOCIAL_LINKS = [
  { icon: FiMail, label: 'Email', href: `mailto:${socials.email}`, value: socials.email },
  { icon: FiLinkedin, label: 'LinkedIn', href: socials.linkedin, value: '/rishi-raj-biswas-3d' },
  { icon: FiGithub, label: 'GitHub', href: socials.github, value: '@IamRishiraj1' },
  { icon: FiMessageCircle, label: 'WhatsApp', href: socials.whatsapp, value: '+880 1410-047197' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);

    const configured =
      EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
      EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (!configured) {
      // Fallback: open a pre-filled mail client so the form still works out of the box.
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
      const body = encodeURIComponent(
        `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
      );
      window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="section-title max-w-2xl">
            Got a project in mind? <span className="neon-text">Let's build it.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <Field label="Subject" name="subject" type="text" placeholder="What's this about?" />
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan-neon/60"
                />
              </div>
              <button type="submit" data-cursor="hover" className="btn-primary w-full justify-center sm:w-auto" disabled={status === 'sending'}>
                <FiSend size={14} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className="font-mono text-xs text-cyan-neon">Message sent — I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400">
                  Something went wrong. Email me directly at {socials.email}.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="glass-card h-full p-8">
              <h3 className="font-display text-lg font-medium text-ink">Reach me directly</h3>
              <div className="mt-6 space-y-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="hover"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-neon/40 hover:shadow-neon-cyan"
                  >
                    <span className="rounded-lg border border-white/10 p-2.5 text-cyan-neon">
                      <s.icon size={16} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                        {s.label}
                      </span>
                      <span className="block text-sm text-ink group-hover:text-cyan-neon">
                        {s.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cyan-neon/60"
      />
    </div>
  );
}
