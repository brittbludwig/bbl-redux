import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

const SECTIONS = Array.from({ length: 7 }, (_, i) => `section-${i + 1}`);

interface SectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: string[];
}

export const SectionContext = createContext<SectionContextType>({
  activeSection: 'section-1',
  setActiveSection: () => {},
  sections: SECTIONS,
});

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, sections: SECTIONS }}>
      {children}
    </SectionContext.Provider>
  );
};
