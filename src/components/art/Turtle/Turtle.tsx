import { useSection } from '$hooks';
import turtle from '$images/turtle.png';

interface TurtleProps {
  id: string;
}

const Turtle = ({ id }: TurtleProps) => {
  const { activeSection } = useSection();
  const isActive = activeSection === id;

  return (
    <div className={`
      absolute overflow-hidden top-[75%] -left-87.5 w-87.5 h-45 -scale-x-100
      ${isActive ? 'animate-turtle' : ''}
    `}>
      <div className="relative">
        <img
          src={turtle}
          alt="turtle"
          className={`absolute top-0 left-0 ${isActive ? 'w-[300%] animate-turtle-frames' : 'w-full'}`}
        />
      </div>
    </div>
  );
};

export default Turtle;