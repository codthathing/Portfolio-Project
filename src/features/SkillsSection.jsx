import StackSpan from "../components/common/StackSpan";

const SkillsSection = () => {
  const skillsDetails = [
    {
      id: 0,
      topic: "frontend technologies",
      skills: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "css" },
        { id: 2, stack_name: "tailwind" },
        { id: 3, stack_name: "javascript" },
        { id: 4, stack_name: "typescript" },
        { id: 5, stack_name: "react" },
        { id: 6, stack_name: "nextjs" },
        { id: 7, stack_name: "redux" },
        { id: 8, stack_name: "motion" },
      ],
    },
    {
      id: 1,
      topic: "backend technologies",
      skills: [
        { id: 0, stack_name: "nodejs" },
        { id: 1, stack_name: "expressjs" },
        { id: 2, stack_name: "fastapi" },
        { id: 3, stack_name: "mongodb" },
        { id: 4, stack_name: "sqlite" },
        { id: 5, stack_name: "sqlalchemy" },
        { id: 6, stack_name: "mysql" },
      ],
    },
    {
      id: 2,
      topic: "testing",
      skills: [
        { id: 0, stack_name: "jest" },
        { id: 1, stack_name: "rtl" },
      ],
    },
    {
      id: 3,
      topic: "other programming languages",
      skills: [
        { id: 0, stack_name: "python" },
        { id: 1, stack_name: "java" },
        { id: 2, stack_name: "php" },
      ],
    },
    {
      id: 4,
      topic: "tools & platforms",
      skills: [
        { id: 0, stack_name: "git" },
        { id: 1, stack_name: "github" },
        { id: 2, stack_name: "supabase" },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-10">
      {skillsDetails.map(({ id, topic, skills }) => {
        return (
          <main key={id}>
            <h1 className="text-white font-Yantramanav tracking-widest font-bold capitalize text-xl md:text-4xl lg:text-3xl">{topic}</h1>
            <div className="flex flex-wrap gap-2 md:gap-6 lg:gap-4 mt-2 md:mt-6 lg:mt-4 text-xs md:text-lg lg:text-sm">
              <StackSpan stackArray={skills} className={"bg-grey-textdark text-black"} />
            </div>
          </main>
        );
      })}
    </section>
  );
};

export default SkillsSection;
