import { useState, useEffect, useRef, type FormEvent } from 'react';
import { contactSchema } from '@/lib/contact-schema';

// Public Turnstile SITE key. Build-time inlined (PUBLIC_*), so the real key is
// baked into source at deploy (see skill 8.1c). Default = Cloudflare's
// always-pass TEST key so local/dev + preview work without config.
const SITE_KEY =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA';

type Status = 'idle' | 'submitting' | 'success' | 'error';

declare global {
  interface Window {
    turnstile?: { reset: (el?: string | HTMLElement) => void };
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) return;
    const s = document.createElement('script');
    s.id = 'cf-turnstile-script';
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setServerError('');

    const form = formRef.current;
    if (!form) return;
    const raw = Object.fromEntries(new FormData(form).entries());

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? '');
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const token = (
      form.elements.namedItem('cf-turnstile-response') as HTMLInputElement | null
    )?.value;
    if (!token) {
      setServerError('Please complete the anti-bot check and try again.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...raw, 'cf-turnstile-response': token }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { message?: string };
        throw new Error(body.message ?? 'Submission failed. Please email me directly.');
      }
      setStatus('success');
      form.reset();
      window.turnstile?.reset();
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please email me directly.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-lg border border-border bg-card p-8 text-center text-foreground"
      >
        <p className="font-bold text-lg">Message sent.</p>
        <p className="mt-2 text-muted-foreground font-mono text-sm">
          Thanks — I&apos;ll get back to you shortly. For anything urgent, email{' '}
          <a className="text-accent hover:underline" href="mailto:seth@tenorcreative.com">
            seth@tenorcreative.com
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring';

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 md:p-8 text-left"
    >
      {/* Honeypot — bots fill it, humans never see it. Server rejects if set. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="cf-name" className="font-mono text-sm text-foreground">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" className="text-sm text-destructive font-mono">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="cf-email" className="font-mono text-sm text-foreground">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
          />
          {errors.email && (
            <p id="cf-email-err" className="text-sm text-destructive font-mono">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="cf-company" className="font-mono text-sm text-foreground">
            Company / Agency <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="cf-message" className="font-mono text-sm text-foreground">
            What are you building?
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            maxLength={2000}
            className={inputClass}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'cf-message-err' : undefined}
          />
          {errors.message && (
            <p id="cf-message-err" className="text-sm text-destructive font-mono">
              {errors.message}
            </p>
          )}
        </div>

        <div className="cf-turnstile" data-sitekey={SITE_KEY}></div>

        {serverError && (
          <p role="alert" className="text-sm text-destructive font-mono">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
