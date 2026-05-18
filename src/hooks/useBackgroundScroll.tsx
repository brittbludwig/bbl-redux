import { useEffect, useState } from 'react';
import { useSection } from '$hooks';

const SECTION_GRADIENTS: Record<string, [string, string]> = {
  'section-1': ['#324aff', '#7123ff'],
  'section-2': ['#7123ff', '#a821ff'],
  'section-3': ['#a821ff', '#fc2ee1'],
  'section-4': ['#fc2ee1', '#ff7044'],
  'section-5': ['#ff7044', '#ff9f04'],
  'section-6': ['#1a81ff', '#324aff'],
  'section-7': ['#1a81ff', '#324aff'],
};

const DEFAULT_GRADIENT = SECTION_GRADIENTS['section-1'];

const useBackgroundScroll = () => {
  const { activeSection } = useSection();
  const [gradient, setGradient] = useState(
    `linear-gradient(to bottom, ${DEFAULT_GRADIENT[0]}, ${DEFAULT_GRADIENT[1]})`
  );

  useEffect(() => {
    const [from, to] = SECTION_GRADIENTS[activeSection] ?? DEFAULT_GRADIENT;
    setGradient(`linear-gradient(to bottom, ${from}, ${to})`);
  }, [activeSection]);

  return gradient;
};

export default useBackgroundScroll;