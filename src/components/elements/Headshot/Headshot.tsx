import { useState, useEffect } from 'react';
import { useSection } from '$hooks';
import brittany from '$images/brittany.png';

interface HeadshotProps {
  id: string;
}

const Headshot = ({ id }: HeadshotProps) => {
  const { activeSection } = useSection();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated && activeSection === id) {
      setHasAnimated(true);
    }
  }, [activeSection, hasAnimated, id]);

  return (
    <div className={`
      absolute transition-all duration-250 linear
      ${hasAnimated
        ? 'w-25 -top-12.5 -right-2.5 md:w-37.5 md:-top-12.5 md:-right-15'
        : 'w-0 -top-4.75 -right-1.25 md:-top-11.25 md:-right-11.25'
      }
    `}>
      <img src={brittany} className="w-full" alt="brittany" />
    </div>
  );
};

export default Headshot;