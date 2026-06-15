/** Header nav section ids and labels (excludes home). */
export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/** All scroll-tracked sections, including home (not shown in nav). */
export const SECTIONS = [{ id: "home", label: "Home" }, ...NAV_SECTIONS] as const;
