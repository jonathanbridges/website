import { describe, expect, it } from "vitest";
import { siteMeta } from "@/content/site-meta";

describe("siteMeta", () => {
  it("uses an absolute canonical site URL", () => {
    expect(siteMeta.url).toMatch(/^https:\/\//);
  });

  it("includes updated full-stack positioning in the description", () => {
    expect(siteMeta.description).toMatch(/TypeScript/i);
    expect(siteMeta.description).toMatch(/GCP|Google Cloud/i);
    expect(siteMeta.description).toMatch(/Terraform/i);
  });

  it("defines social preview image metadata", () => {
    expect(siteMeta.ogImage).toMatch(/^https:\/\/jonathanbridges\.com\//);
    expect(siteMeta.ogImageAlt.length).toBeGreaterThan(0);
  });
});
