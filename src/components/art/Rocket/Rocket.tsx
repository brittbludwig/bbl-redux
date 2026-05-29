import { useSection } from '$hooks';
import rocket from '$images/rocket.png';

interface RocketProps {
  id: string;
}

const Rocket = ({ id }: RocketProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  console.log('Rocket active:', isActive);

  return (
    <div className={`
      absolute bottom-[-10%] left-[-20%] w-37.5 md:w-62.5 -rotate-45
      ${isActive ? 'animate-rocket-diagonal' : ''}
    `}>
      <img src={rocket} alt="rocket" className="w-full" />
    </div>
  );
};

export default Rocket;