import { useState, useEffect } from 'react';
import { useSection } from '$hooks';
import hillLeft from '$images/hill-left.png';
import hillRight from '$images/hill-right.png';

interface HillsProps {
  anchor: 'left' | 'right';
  id: string;
}

const Hills = ({ anchor, id }: HillsProps) => {
  const { activeSection } = useSection();
  const [hasAnimated, setHasAnimated] = useState(false);
  const hillImg = anchor === 'left' ? hillLeft : hillRight;

  useEffect(() => {
    if (!hasAnimated && activeSection === id) {
      setHasAnimated(true);
    }
  }, [activeSection, hasAnimated, id]);

  const anchorClasses = anchor === 'left'
    ? `${hasAnimated
        ? '-left-[150px] portrait:-left-[75px] portrait:md:-left-[150px]'
        : '-left-[650px]'
      }`
    : `${hasAnimated
        ? '-right-[150px] portrait:-right-[75px] portrait:md:-right-[150px]'
        : '-right-[500px]'
      }`;

  return (
    <div className={`absolute bottom-0 z-10 w-[75vw] transition-all duration-1000 linear ${anchorClasses}`}>
      <img src={hillImg} className="w-full" alt="hill" />
    </div>
  );
};

export default Hills;