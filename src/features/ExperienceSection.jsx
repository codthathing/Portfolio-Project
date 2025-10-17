import ResumeTopicText from "../components/resume/ResumeTopicText";
import EducationMain from "./education/EducationMain";

const ExperienceSection = () => {
  const experienceDetails = [{ id: 0, start_date: "10/2025", course: "Frontend Developer (Intern)", school: "HNG Tech" }];

  return (
    <>
      <ResumeTopicText topic={"work experience"} text={"With my limited experience I’ve still been able to achieve things that are huge milestones to me, from completing the 100 Days of Code challenge, taking on volunteer roles that helped me grow, to building many impactful projects that pushed me beyond my comfort zone. Each of these experiences has shaped my journey, strengthened my skills, and deepened my passion for continuous learning and improvement."} />
      <EducationMain educationArray={experienceDetails} />
    </>
  );
};

export default ExperienceSection;
