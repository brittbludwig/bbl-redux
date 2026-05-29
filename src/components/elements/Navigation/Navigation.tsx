import { useState } from 'react';
import { useSection } from '$hooks';
import sectionData from '../../../content';

const sectionColors: Record<string, string> = {
  'section-1': '#324aff',
  'section-2': '#7123ff',
  'section-3': '#a821ff',
  'section-4': '#fc2ee1',
  'section-5': '#ff7044',
  'section-6': '#1a81ff',
  'section-7': '#324aff',
};

const Navigation = () => {
  const { activeSection } = useSection();
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  const pageSections = Object.values(sectionData);
  const activeColor = sectionColors[activeSection] ?? '#adb5bd';


return (
  <div className="bg-white fixed top-0 left-0 w-full h-15 lg:h-20 z-50">
    <div className="flex items-center justify-between h-full px-6">
      <a
        href="#section-1"
        style={{ color: activeColor }}
        className="text-xl lg:text-2xl py-2 lg:py-4 lg:mt-2 transition-all duration-200"
      >
        BrittanyLudwig.com
      </a>

      <button
        onClick={toggleNav}
        aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isNavOpen}
        className="lg:hidden flex justify-end py-3"
      >
        <div>
          <span style={{ backgroundColor: activeColor }} className={`block my-1.5 w-7.5 h-[0.175rem] transition-all duration-200 ${isNavOpen ? 'translate-y-2 rotate-[-135deg]' : ''}`} />
          <span style={{ backgroundColor: activeColor }} className={`block my-1.5 w-7.5 h-[0.175rem] transition-all duration-200 ${isNavOpen ? 'scale-0' : ''}`} />
          <span style={{ backgroundColor: activeColor }} className={`block my-1.5 w-7.5 h-[0.175rem] transition-all duration-200 ${isNavOpen ? '-translate-y-2 rotate-135' : ''}`} />
        </div>
      </button>

      <div className="hidden lg:block py-4">
        <ul className="list-none m-0 p-0">
          {pageSections.map((section, index) => index > 0 && (
            <li key={section.id} className="inline-block mx-3">
              <a
                href={`#${section.id}`}
                style={{ color: activeColor }}
                className="text-xl block transition-all duration-200 cursor-pointer hover:no-underline"
              >
                {section.header}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {isNavOpen && (
    <div className="lg:hidden absolute top-15 right-0 w-full bg-white px-8 py-4 text-right shadow-lg">
      <ul className="list-none m-0 p-0">
        {pageSections.map((section, index) => index > 0 && (
          <li key={section.id} className="block">
            <a
              href={`#${section.id}`}
              onClick={() => setNavOpen(false)}
              style={{ color: activeColor }}
              className="text-[2rem] block py-2 transition-all duration-200 cursor-pointer hover:no-underline"
            >
              {section.header}
            </a>
          </li>
        ))}
      </ul>
    </div>
    )}
  </div>
  );
};

export default Navigation;