const HomeName = ({ name, className }) => {
  return (
    <span className={`font-Yantramanav relative inline-block font-black tracking-wide text-5xl md:text-8xl lg:text-9xl ${className}`}>
      <span className="relative z-10 text-white">{name}</span>
      <span className="absolute left-0 top-0 z-0 text-blue-400 translate-x-[1.5px] -translate-y-[1.5px] animate-pulse">{name}</span>
      <span className="absolute left-0 top-0 z-0 text-red-400 -translate-x-[1.5px] translate-y-[1.5px] animate-pulse">{name}</span>
    </span>
  );
};

export default HomeName;