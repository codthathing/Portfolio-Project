import { checkStackDetails } from "../../utils/checkStackDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StackSpan = ({ stackArray, className }) => {
  return (
    <>
      {stackArray.map(({ id, stack_name }) => {
        const stackDetails = checkStackDetails(stack_name);
        return (
          <span key={id} className={`px-3 py-1 md:px-6 md:py-2 lg:px-2 lg:py-1 rounded-full flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1 ${className}`}>
            {stack_name.toLowerCase() === "tailwind css" || stack_name.toLowerCase() === "netlify" || stack_name.toLowerCase() === "vercel" || stack_name.toLowerCase() === "git" ? <stackDetails.icon /> : <FontAwesomeIcon icon={stackDetails.icon} />}
            <p className="font-semibold font-Roboto">{stackDetails.text}</p>
          </span>
        );
      })}
    </>
  );
};

export default StackSpan;