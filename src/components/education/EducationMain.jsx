const EducationMain = ({ educationArray }) => {
  return (
    <main className="grid md:grid-cols-2 gap-y-6 md:gap-8 lg:gap-10">
      {educationArray.map(({ id, start_date, end_date, course, school }) => {
        return (
          <div key={id} className="bg-grey-bgdark py-4 md:p-8 lg:p-6 rounded-lg capitalize text-center md:text-start">
            <p className="text-grey-textdark text-xs md:text-xl lg:text-base font-Roboto">{start_date} - {end_date || "Present"}</p>
            <h1 className="text-white mt-1 mb-4 md:mb-8 lg:mt-1 text-lg md:text-2xl lg:text-xl font-Yantramanav font-extrabold tracking-widest capitalize">{course}</h1>
            <div className="flex items-center justify-center md:justify-start gap-x-1.5 md:gap-x-3">
              <i className="bg-grey-textdark w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" />
              <p className="text-grey-textdark text-xs md:text-xl lg:text-base font-Roboto capitalize">{school}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default EducationMain;