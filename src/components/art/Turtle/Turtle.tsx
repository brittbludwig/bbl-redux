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
      absolute overflow-hidden top-[75%] -left-[350px] w-[350px] h-[180px] -scale-x-100
      ${isActive ? 'animate-turtle' : ''}
    `}>
      <div className="relative w-full h-full">
        <img
          src={turtle}
          alt="turtle"
          className={`absolute top-0 left-0 max-w-none ${
            isActive ? 'w-[300%] animate-turtle-frames' : 'w-full'
          }`}
        />
      </div>
    </div>
  );
};

export default Turtle;