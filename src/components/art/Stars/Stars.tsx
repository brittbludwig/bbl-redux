import { useMemo } from 'react';
import { randomNumber } from '$utils';
import { useStars, useBackgroundScroll } from '$hooks';
import star1 from '$images/star1.png';
import star2 from '$images/star2.png';
import star3 from '$images/star3.png';
import star4 from '$images/star4.png';
import star5 from '$images/star5.png';
import star6 from '$images/star6.png';
import star7 from '$images/star7.png';

const STARS = [star1, star2, star3, star4, star5, star6, star7];

interface StarProps {
  children?: React.ReactNode;
}

const generateStarStyles = (index: number, total: number): React.CSSProperties => {
  const size = `${randomNumber(0, 2)}.${randomNumber(0, 6)}`;
  const isShootingStar = randomNumber(0, total) === index;

  return {
    top: `${randomNumber(0, 95)}%`,
    left: `${randomNumber(0, 99)}%`,
    position: 'absolute',
    animation: `pulse 10s linear ${randomNumber(5, 60)}s infinite forwards`,
    transition: 'all 0.5s',
    transform: `scale(${size}) ${
      isShootingStar ? `translate(${randomNumber(100, 500)}%, ${randomNumber(100, 500)}%)` : ''
    }`,
  };
};

const DARK_COLORS = ['#324aff', '#7123ff', '#a821ff'];
const LIGHT_COLORS = ['#fc2ee1', '#ff7044', '#ff9f04', '#ffc104'];

const getStarOpacity = (bgColor: string): number => {
  if (DARK_COLORS.includes(bgColor)) return 1;
  const lightIndex = LIGHT_COLORS.indexOf(bgColor);
  if (lightIndex === -1) return 1;
  return Math.max(0.1, 1 - (lightIndex / LIGHT_COLORS.length));
};

const Stars = ({ children }: StarProps) => {
  const { starDensity } = useStars();
  const bgColor = useBackgroundScroll();
  const starOpacity = getStarOpacity(bgColor);

  const stars = useMemo(() => {
    const starArray = Array.from({ length: starDensity }, () => STARS).flat();
    return starArray.map((src, index) => ({
      id: `star-${index}`,
      src,
      styles: generateStarStyles(index, starArray.length),
    }));
  }, [starDensity]);

  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 overflow-hidden transition-opacity duration-700"
        style={{ opacity: starOpacity }}
      >
        {stars.map(({ id, src, styles }) => (
          <img key={id} src={src} style={styles} alt="" />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Stars;