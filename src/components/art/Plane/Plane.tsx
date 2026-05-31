import { useSection } from '$hooks';
import plane from '$images/plane.png';

interface PlaneProps {
  id: string;
}

const Plane = ({ id }: PlaneProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`
      absolute top-0 z-10 w-[75%] md:w-[50%] lg:w-[50%]
      ${isActive ? 'left-full transition-all duration-8000 ease-linear' : '-left-full'}
    `}>
      <img src={plane} className="w-full" alt="plane" />
    </div>
  );
};

export default Plane;