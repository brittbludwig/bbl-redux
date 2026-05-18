import seaweed from '$images/seaweed.png';

const Seaweed = () => {
  return (
    <div className="absolute bottom-0 -left-[5%] w-[150px] md:w-[250px] lg:left-[15%]">
      <img src={seaweed} className="w-full" alt="seaweed" />
    </div>
  );
};

export default Seaweed;