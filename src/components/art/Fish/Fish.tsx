import { useSection } from '$hooks';
import fish from '$images/fish.png';

interface FishProps {
  id: string;
}

const Fish = ({ id }: FishProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div
      className={`
        absolute overflow-hidden top-[25%] -right-62.5 w-62.5 h-32
        ${isActive ? 'animate-fish' : ''}
      `}
    >
      <div className="relative w-full h-full">
        <img
          src={fish}
          alt="fish"
          className={`absolute top-0 left-0 max-w-none ${
            isActive ? 'w-[200%] animate-fish-frames' : 'w-full'
          }`}
        />
      </div>
    </div>
  );
};

export default Fish;