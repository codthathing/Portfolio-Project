import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsPaginationButton = ({ icon, buttonFunction }) => {
  return (
    <div onClick={buttonFunction} className="flex items-center justify-center cursor-pointer bg-grey-borderdark w-6 h-6 md:w-14 md:h-14 lg:h-12 lg:w-12 rounded-full">
      <FontAwesomeIcon icon={icon} className="text-white text-xs md:text-xl lg:text-base" />
    </div>
  );
};

export default ProjectsPaginationButton;