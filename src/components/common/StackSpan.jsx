import { checkStackDetails } from "../../utils/checkStackDetails";

const StackSpan = ({ stackArray, className }) => {
  return (
    <>
      {stackArray.map(({ id, stack_name }) => {
        const { Icon, text } = checkStackDetails(stack_name);
        return (
          <span key={id} className={`px-3 py-1 md:px-6 md:py-2 lg:px-2 lg:py-1 select-none rounded-full flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1 ${className}`}>
            <Icon />
            { text && <p className="font-semibold font-Roboto">{text}</p> }
          </span>
        );
      })}
    </>
  );
};

export default StackSpan;