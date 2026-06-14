import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/contact-form-schema";

describe("contactFormSchema", () => {
  it("accepts valid contact form values", () => {
    const result = contactFormSchema.safeParse({
      subject: "Project inquiry",
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I'd love to talk about a full-stack role.",
    });

    expect(result.success).toBe(true);
  });

  it("trims whitespace from string fields", () => {
    const result = contactFormSchema.safeParse({
      subject: "  Hello  ",
      name: "  Jane Doe  ",
      email: "  jane@example.com  ",
      message: "  Looking to connect about engineering work.  ",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.subject).toBe("Hello");
      expect(result.data.name).toBe("Jane Doe");
      expect(result.data.email).toBe("jane@example.com");
    }
  });

  it("rejects invalid email addresses", () => {
    const result = contactFormSchema.safeParse({
      subject: "Hello",
      name: "Jane Doe",
      email: "not-an-email",
      message: "This should fail validation.",
    });

    expect(result.success).toBe(false);
  });

  it("requires messages with at least 10 characters", () => {
    const result = contactFormSchema.safeParse({
      subject: "Hello",
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Too short",
    });

    expect(result.success).toBe(false);
  });
});
