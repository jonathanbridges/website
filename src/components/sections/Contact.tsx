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
    "w-full border-b border-theme bg-transparent px-0 py-3 text-center text-primary placeholder:text-muted focus:outline-none focus:border-[var(--color-accent)]";

  return (
    <Section id="contact" label="Contact" fullHeight tone="muted">
      <h2 className="text-block mb-12 text-3xl sm:text-5xl md:text-6xl">
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-md space-y-6 text-center"
      >
        <div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Subject"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSubmitting}
            placeholder="Name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            placeholder="Email"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            disabled={isSubmitting}
            placeholder="Message"
            className={`${inputClass} resize-none`}
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
          className="text-eyebrow tracking-[0.35em] text-primary transition-opacity hover:opacity-60 disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send"}
        </button>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted">
          <a href={`mailto:${contact.email}`} className="cursor-pointer hover:text-primary">
            {contact.email}
          </a>
          <span aria-hidden>·</span>
          <a
            href={`tel:${contact.phone.replace(/\./g, "")}`}
            className="cursor-pointer hover:text-primary"
          >
            {contact.phone}
          </a>
        </div>
      </form>
    </Section>
  );
}
