const ProjectsPaginationButton = ({ Icon, buttonFunction }) => {
  return (
    <div onClick={buttonFunction} className="flex items-center justify-center cursor-pointer bg-grey-borderdark w-6 h-6 md:w-14 md:h-14 lg:h-12 lg:w-12 rounded-full">
      <Icon className="text-white text-xs md:text-xl lg:text-base" />
    </div>
  );
};

export default ProjectsPaginationButton;