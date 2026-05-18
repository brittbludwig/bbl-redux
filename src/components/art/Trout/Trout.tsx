import { useSection } from '$hooks';
import trout from '$images/trout.png';

interface TroutProps {
  id: string;
}

const Trout = ({ id }: TroutProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`
      absolute overflow-hidden top-[75%] -right-62.5 w-62.5 h-32
      ${isActive ? 'animate-trout' : ''}
    `}>
      <div className="relative">
        <img
          src={trout}
          alt="trout"
          className={`absolute top-0 left-0 ${isActive ? 'w-[400%] animate-trout-frames' : 'w-full'}`}
        />
      </div>
    </div>
  );
};

export default Trout;