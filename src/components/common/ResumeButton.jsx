import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/Akinwunmi_Oluwasegun_Resume.pdf";

const ResumeButton = ({ mainClass }) => {
  return (
    <a href={resume} target="_blank" className={`${mainClass} items-center gap-x-2 md:gap-x-4 lg:gap-x-3 cursor-pointer text-gray-400 border border-gray-400 transition-all ease-linear duration-200 hover:text-white hover:border-white rounded-full mr-4 my-2 md:m-0 p-3 md:p-4 lg:p-3`}>
      <FontAwesomeIcon icon={faDownload} className="text-xs md:text-xl lg:text-base" />
      <span className="font-Roboto text-xs md:text-base lg:text-sm uppercase">download resume</span>
    </a>
  );
};

export default ResumeButton;