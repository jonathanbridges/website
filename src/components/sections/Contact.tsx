import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "@/components/Layout/Section";
import { contact } from "@/content";
import { eyebrowMuted, eyebrowPrimary } from "@/constants/typography";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form-schema";

interface SubmitStatus {
  ok: boolean;
  message: string;
}

interface FieldProps {
  id: keyof ContactFormValues;
  label: string;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-2 text-left">
      <label htmlFor={id} className={`${eyebrowMuted} block tracking-[0.25em]`}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const fieldClass = (hasError: boolean) =>
  [
    "w-full rounded-sm border bg-[var(--color-bg)] px-4 py-3 text-primary",
    "focus:outline-none focus:ring-1",
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
      : "border-theme focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30",
  ].join(" ");

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitStatus(null);

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus({ ok: true, message: "Thanks for your email!" });
        reset();
        return;
      }

      const data = (await response.json()) as { error?: string };
      setSubmitStatus({
        ok: false,
        message: data.error ?? "Something went wrong. Please try again.",
      });
    } catch {
      setSubmitStatus({
        ok: false,
        message: "Network error. Please try again later.",
      });
    }
  });

  return (
    <Section id="contact" label="Contact" fullHeight={false} tone="muted">
      <h2 className="text-block mb-12 text-3xl sm:text-5xl md:text-6xl">
        Get in Touch
      </h2>

      <div className="mx-auto w-full max-w-lg">
        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-5 border border-theme bg-[var(--color-bg)] p-6 shadow-sm md:p-8"
        >
          <Field id="subject" label="Subject" error={errors.subject?.message}>
            <input
              id="subject"
              type="text"
              autoComplete="off"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={fieldClass(Boolean(errors.subject))}
              placeholder="What's this about?"
              {...register("subject")}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name?.message}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldClass(Boolean(errors.name))}
                placeholder="Your name"
                {...register("name")}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email?.message}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={fieldClass(Boolean(errors.email))}
                placeholder="you@example.com"
                {...register("email")}
              />
            </Field>
          </div>

          <Field id="message" label="Message" error={errors.message?.message}>
            <textarea
              id="message"
              rows={5}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass(Boolean(errors.message))} min-h-32 resize-y`}
              placeholder="Tell me a bit about what you're looking for."
              {...register("message")}
            />
          </Field>

          {submitStatus && (
            <p
              className={`text-sm ${submitStatus.ok ? "text-primary" : "text-red-500"}`}
              role="status"
            >
              {submitStatus.message}
            </p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${eyebrowPrimary} w-full border border-[var(--color-accent)] px-6 py-3.5 tracking-[0.35em] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
          <a
            href={`mailto:${contact.email}`}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            {contact.email}
          </a>
          <span aria-hidden>·</span>
          <a
            href={`tel:${contact.phone.replace(/\./g, "")}`}
            className="cursor-pointer transition-colors hover:text-primary"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
