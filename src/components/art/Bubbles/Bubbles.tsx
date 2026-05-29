import { useMemo } from 'react';
import { randomNumber } from '$utils';
import { useStars, useParallax } from '$hooks';
import bubble from '$images/bubble.png';

interface BubblesProps {
  children?: React.ReactNode;
  opacity?: number;
}

const generateBubbleStyles = (index: number): React.CSSProperties => {
  const scale = randomNumber(2, 26) / 30;
  const bubbleOpacity = Math.max(0.4, 1 - scale / 4);

  return {
    top: `${randomNumber(0, 95)}%`,
    left: `${randomNumber(0, 99)}%`,
    position: 'absolute',
    width: '24px',
    height: '24px',
    opacity: bubbleOpacity,
    transform: `scale(${scale})`,
  };
};

const Bubbles = ({ children, opacity = 1 }: BubblesProps) => {
  const { starDensity } = useStars();
  const { ref, offset } = useParallax<HTMLDivElement>(-0.5);

  const bubbles = useMemo(() => {
    return Array.from({ length: starDensity * 2 }, (_, index) => ({
      id: `bubble-${index}`,
      styles: generateBubbleStyles(index),
    }));
  }, [starDensity]);

  return (
    <div className="relative w-full overflow-hidden bg-linear-to-b from-[#1a81ff] to-[#324aff]">
      <div
        ref={ref}
        className="absolute inset-y-[-60%] inset-x-0 overflow-hidden transition-opacity duration-700 will-change-transform"
        style={{
          opacity,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      >
        {bubbles.map(({ id, styles }) => (
          <img key={id} src={bubble} style={styles} alt="" />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Bubbles;