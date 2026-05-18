import { useState, useEffect } from 'react';
import { useSection } from '$hooks';
import cloudLeft from '$images/cloud-left.png';
import cloudRight from '$images/cloud-right.png';

interface CloudsProps {
  anchor: 'left' | 'right';
  id: string;
}

const Clouds = ({ anchor, id }: CloudsProps) => {
  const { activeSection } = useSection();
  const [hasAnimated, setHasAnimated] = useState(false);
  const cloudImg = anchor === 'left' ? cloudLeft : cloudRight;

  useEffect(() => {
    if (!hasAnimated && activeSection === id) {
      setHasAnimated(true);
    }
  }, [activeSection, hasAnimated, id]);

  const baseClasses = 'absolute z-10 max-w-[370px] md:max-w-[500px] transition-all duration-1000 linear';

  const anchorClasses = anchor === 'left'
    ? `bottom-0 max-w-[350px] md:max-w-[550px] lg:max-w-[650px]
       ${hasAnimated
         ? '-left-[225px] portrait:md:-left-[150px]'
         : '-left-[650px] portrait:md:-left-[650px]'
       }`
    : `top-0
       ${hasAnimated
         ? '-right-[175px] portrait:md:-right-[150px]'
         : '-right-[500px] portrait:md:-right-[500px]'
       }`;

  return (
    <div className={`${baseClasses} ${anchorClasses}`}>
      <img src={cloudImg} className="w-full" alt="cloud" />
    </div>
  );
};

export default Clouds;