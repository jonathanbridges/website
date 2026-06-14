import { useCallback, useEffect, useState } from "react";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { SiteChrome } from "@/components/Layout/SiteChrome";
import { HEADER_HEIGHT_PX } from "@/constants/layout";
import { Header, SECTIONS } from "@/components/Layout/Header";
import { ScrollProgress } from "@/components/Layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { useTheme } from "@/hooks/useTheme";

function App() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        root: main,
        rootMargin: `-${HEADER_HEIGHT_PX}px 0px -40% 0px`,
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-[var(--color-bg)]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main
        className={`h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth motion-reduce:snap-none motion-reduce:scroll-auto ${
          theme === "geocities" ? "pb-44" : "pb-14 md:pb-16"
        }`}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteChrome theme={theme} />
      <ChatWidget />
    </>
  );
}

export default App;
