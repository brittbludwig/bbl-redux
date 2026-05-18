import { useSection } from '$hooks';
import submarine from '$images/submarine.png';

interface SubmarineProps {
  id: string;
}

const Submarine = ({ id }: SubmarineProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`absolute top-[25%] -right-87.5 w-87.5 ${isActive ? 'animate-submarine' : ''}`}>
      <img src={submarine} className="w-full" alt="submarine" />
    </div>
  );
};

export default Submarine;