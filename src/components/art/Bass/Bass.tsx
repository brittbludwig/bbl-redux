import { useSection } from '$hooks';
import bass from '$images/bass.png';

interface BassProps {
  id: string;
}

const Bass = ({ id }: BassProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`
      absolute overflow-hidden top-[20%] -left-[250px] w-[250px] h-[269px]
      ${isActive ? 'animate-bass' : ''}
    `}>
      <div className="relative">
        <img
          src={bass}
          alt="bass"
          className={`absolute top-0 left-0 ${isActive ? 'w-[400%] animate-bass-frames' : 'w-full'}`}
        />
      </div>
    </div>
  );
};

export default Bass;