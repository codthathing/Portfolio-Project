import { useState } from "react";
import PageMain from "../components/layout/PageMain";
import ResumeTexts from "../components/resume/ResumeTexts";
import ResumeLayout from "../components/resume/ResumeLayout";

const ResumePage = () => {
  const [resumeShown, setResumeShown] = useState("about me");

  return (
    <PageMain className={"grid lg:grid-cols-3 gap-y-6 lg:gap-x-8 px-4 md:px-12 lg:px-8 lg:h-full lg:overflow-hidden"}>
      <ResumeTexts resumeShown={resumeShown} setResumeShown={setResumeShown} />
      <ResumeLayout resumeShown={resumeShown}/>
    </PageMain>
    // <section className="grid lg:grid-cols-3 gap-y-6 lg:gap-x-8 px-4 md:px-12 lg:px-8 lg:h-full lg:overflow-hidden">

    // </section>
  );
};

export default ResumePage;