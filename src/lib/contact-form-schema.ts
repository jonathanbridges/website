import { z } from "zod";

/** Zod schema for the contact form fields and validation messages. */
export const contactFormSchema = z.object({
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(120, "Subject must be 120 characters or less"),
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(80, "Name must be 80 characters or less"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(5000, "Message must be 5000 characters or less"),
});

/** Inferred contact form values from `contactFormSchema`. */
export type ContactFormValues = z.infer<typeof contactFormSchema>;
