import { useSection } from '$hooks';
import balloon from '$images/balloon.png';

interface BalloonProps {
  id: string;
}

const Balloon = ({ id }: BalloonProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`
      absolute w-37.5 md:w-62.5
      ${isActive
        ? 'animate-[balloonRight_10s_linear_forwards,balloonSway_3s_ease-in-out_infinite]'
        : 'bottom-0 -right-37.5 md:-right-62.5'
      }
    `}>
      <img src={balloon} className="w-full" alt="balloon" />
    </div>
  );
};

export default Balloon;