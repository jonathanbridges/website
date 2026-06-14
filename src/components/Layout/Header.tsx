import { useState } from "react";
import { contact, profile } from "@/content";
import { useTheme } from "@/hooks/useTheme";
import { THEME_LABELS, type Theme } from "@/types/theme";

export const SECTIONS = [
  { id: "home", label: "Index" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const { theme, setTheme, cycleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-theme backdrop-blur-md"
      style={{ backgroundColor: "var(--color-header-bg)" }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="text-eyebrow cursor-pointer tracking-[0.35em] text-primary transition-opacity hover:opacity-60"
        >
          <span className="lg:hidden">{profile.shortName}</span>
          <span className="hidden lg:inline">{profile.name}</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className={`cursor-pointer text-sm uppercase tracking-wider transition-colors ${
                activeSection === id
                  ? "text-[var(--color-accent)]"
                  : "text-muted hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 sm:flex" role="group" aria-label="Theme">
            {(["light", "dark", "geocities"] as Theme[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTheme(t)}
                aria-pressed={theme === t}
                className={`cursor-pointer rounded px-2 py-1 text-xs uppercase tracking-wide transition-colors ${
                  theme === t
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                    : "text-muted hover:text-primary"
                }`}
              >
                {THEME_LABELS[t]}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={cycleTheme}
            className="cursor-pointer rounded px-2 py-1 text-xs uppercase tracking-wide text-muted hover:text-primary sm:hidden"
            aria-label="Cycle theme"
          >
            Theme
          </button>

          <a
            href={contact.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer opacity-70 transition-opacity hover:opacity-100 sm:block"
            aria-label="GitHub"
          >
            <img
              src="/graphics/github-original.svg"
              alt=""
              className="h-5 w-5 [filter:var(--icon-filter,none)]"
            />
          </a>
          <a
            href={contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer text-muted hover:text-primary sm:block"
            aria-label="LinkedIn"
          >
            <img src="/graphics/linkedin.svg" alt="" className="h-5 w-5" />
          </a>

          <button
            type="button"
            className="flex cursor-pointer flex-col gap-1.5 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-6 bg-[var(--color-fg)]" />
            <span className="block h-0.5 w-6 bg-[var(--color-fg)]" />
            <span className="block h-0.5 w-6 bg-[var(--color-fg)]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="absolute top-full right-0 left-0 border-t border-theme px-6 py-4 backdrop-blur-md md:hidden"
          style={{ backgroundColor: "var(--color-header-bg)" }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNav(id)}
                  className={`w-full cursor-pointer text-left text-sm uppercase tracking-wider ${
                    activeSection === id
                      ? "text-[var(--color-accent)]"
                      : "text-muted"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
