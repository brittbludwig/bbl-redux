import { useState, useEffect } from 'react';
import { useSection, useParallax } from '$hooks';
import sun from '$images/sun.png';

interface SunProps {
  id: string;
}

const Sun = ({ id }: SunProps) => {
  const { activeSection } = useSection();
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, offset } = useParallax<HTMLDivElement>(0.15);

  useEffect(() => {
    if (!hasAnimated && activeSection === id) setHasAnimated(true);
  }, [activeSection, hasAnimated, id]);

  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      className="absolute -bottom-5 lg:bottom-0 left-1/2 w-full ml-[-50%] will-change-transform"
    >
      <div
        className={`
          transition-all duration-2000 delay-1000 linear mx-auto
          ${hasAnimated ? 'w-full' : 'w-0'}
        `}
      >
        <img src={sun} className="w-full" alt="sun" />
      </div>
    </div>
  );
};

export default Sun;