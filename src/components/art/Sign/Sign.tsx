import { useParallax } from '$hooks';
import sign from '$images/sign.png';

const Sign = () => {
    const { ref, offset } = useParallax<HTMLDivElement>(0.25);
  return (
    <div    
      ref={ref}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }} className="absolute bottom-[-10%] left-[15%] w-50">
      <img src={sign} className="w-full" alt="sign" />
    </div>
  );
};

export default Sign;