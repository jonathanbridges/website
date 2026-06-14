import { useState, type FormEvent } from "react";
import { contact } from "@/content";
import { Section } from "@/components/Layout/Section";

interface FormStatus {
  ok: boolean;
  message: string;
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>({ ok: false, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({ ok: true, message: "Thanks for your email!" });
        form.reset();
      } else {
        const data = (await response.json()) as { error?: string };
        setStatus({
          ok: false,
          message: data.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        ok: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-theme bg-[var(--color-bg)] px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]";

  return (
    <Section id="contact" label="Contact" fullHeight={false}>
      <h2 className="text-display mb-12 text-5xl text-primary md:text-7xl">
        Get in Touch
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              disabled={isSubmitting}
              placeholder="Enter a subject"
              className={inputClass}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={isSubmitting}
              placeholder="Enter a message"
              className={inputClass}
            />
          </div>
          {status.message && (
            <p
              className={`text-sm ${status.ok ? "text-primary" : "text-red-500"}`}
              role="status"
            >
              {status.message}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-theme px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:bg-[var(--color-bg-muted)] disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\./g, "")}`}>
              {contact.phone}
            </a>
          </div>
        </form>
        <div
          className="hidden min-h-[400px] bg-cover bg-center lg:block"
          style={{ backgroundImage: "url(/images/about.jpg)" }}
          role="img"
          aria-label="Jonathan Bridges"
        />
      </div>
    </Section>
  );
}
