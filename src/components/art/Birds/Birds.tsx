import { useSection } from '$hooks';
import birds from '$images/birds.png';

interface BirdsProps {
  id: string;
}

const Birds = ({ id }: BirdsProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div
      className={`
        absolute overflow-hidden top-[20%] portrait:md:top-[10%]
        -right-95 w-95 h-67.25
        ${isActive ? 'animate-birds' : ''}
      `}
    >
      <div className="relative w-full h-full">
        <img
          src={birds}
          alt="birds"
          className={`absolute top-0 left-0 max-w-none ${
            isActive ? 'w-[200%] animate-birds-frames' : 'w-full'
          }`}
        />
      </div>
    </div>
  );
};

export default Birds;