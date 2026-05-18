import { useState, useEffect } from 'react';
import { useSection } from '$hooks';
import sun from '$images/sun.png';

interface SunProps {
  id: string;
}

const Sun = ({ id }: SunProps) => {
  const { activeSection } = useSection();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated && activeSection === id) {
      setHasAnimated(true);
    }
  }, [activeSection, hasAnimated, id]);

  return (
    <div className={`
      absolute bottom-0 left-1/2
      transition-all duration-2000 delay-1000 linear
      ${hasAnimated ? 'w-full ml-[-50%]' : 'w-0'}
    `}>
      <img src={sun} className="w-full" alt="sun" />
    </div>
  );
};

export default Sun;