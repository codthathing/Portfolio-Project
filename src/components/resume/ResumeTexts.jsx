const ResumeTexts = ({ resumeShown, setResumeShown }) => {
  const resumeTexts = [
    { id: 0, text: "about me" },
    { id: 1, text: "education" },
    { id: 2, text: "experience" },
    { id: 3, text: "skills" },
    // { id: 4, text: "achievement" },
  ];

  const changeResumeShown = (id) => {
    setResumeShown(resumeTexts.find((resume) => resume.id === id).text);
  };

  return (
    <main className="lg:h-full flex flex-col gap-y-3 md:gap-y-6 lg:gap-y-4 py-6 md:py-12 lg:p-8">
      {resumeTexts.map(({ id, text }) => {
        return (
          <div key={id} onClick={() => changeResumeShown(id)} className={`${text === resumeShown ? "bg-grey-textdark text-black" : "bg-grey-bgdark text-white"} cursor-pointer select-none text-center rounded-full font-semibold font-Roboto tracking-widest capitalize py-3 md:py-6 lg:py-3 text-xs md:text-xl lg:text-base`}>{`<${text} />`}</div>
        );
      })}
    </main>
  );
};

export default ResumeTexts;