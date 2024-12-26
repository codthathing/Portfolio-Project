import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkStackDetails } from "../utils/checkStackDetails";

const SkillsPage = () => {
  const skillsDetails = [
    {
      id: 0, topic: "frontend technologies", skills: [
        { id: 0, skill: "html" },
        { id: 0, skill: "css" },
        { id: 0, skill: "javascript" },
        { id: 0, skill: "react" },
        { id: 0, skill: "tailwind css" },
        { id: 0, skill: "bootstrap" },
      ]
    },
    { id: 1, topic: "other technologies", skills: [{ id: 0, skill: "localstorage" }] },
  ];

  return (
    <section className="flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-10">
      {skillsDetails.map(({ id, topic, skills }) => {
        return (
          <main key={id}>
            <h1 className="text-white font-Yantramanav tracking-widest font-bold capitalize text-xl md:text-4xl lg:text-3xl">{topic}</h1>
            <div className="flex flex-wrap gap-x-2 md:gap-x-6 lg:gap-x-4 mt-2 md:mt-6 lg:mt-4 text-xs md:text-lg lg:text-sm">
              {skills.map(({ id, skill }) => {
                const stackDetails = checkStackDetails(skill);
                return (
                  <span key={id} className="px-3 py-1 md:px-6 md:py-2 lg:px-2 lg:py-1 rounded-full flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1 bg-grey-textdark text-black">
                    {skill.toLowerCase() === "tailwind css" ? <stackDetails.icon /> : <FontAwesomeIcon icon={stackDetails.icon} />}
                    <p className="font-semibold font-Roboto">{stackDetails.text}</p>
                  </span>
                );
              })}
            </div>
          </main>
        );
      })}
    </section>
  );
};

export default SkillsPage;