import { useSection, useParallax } from '$hooks';
import moon from '$images/moon.png';

interface MoonProps {
  id: string;
}

const Moon = ({ id }: MoonProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;
  const { ref, offset } = useParallax<HTMLDivElement>(0.25);

  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      className="absolute top-[16%] right-[-10%] sm:top-[24%] h-37.5 md:top-[30%] md:right-[5%] md:h-50 lg:right-[5%] lg:top-[20%] lg:h-auto"
    >
      <img
        src={moon}
        alt="moon"
        className={`
          transition-all duration-660 ease-in-out
          ${isActive ? 'opacity-100 scale-50 md:scale-75 lg:scale-100' : 'opacity-0 scale-[0.25]'}
        `}
      />
    </div>
  );
};

export default Moon;