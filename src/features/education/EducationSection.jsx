import ResumeTopicText from "../../components/resume/ResumeTopicText";
import EducationMain from "./EducationMain";

const EducationSection = () => {
  const educationDetails = [
    { id: 0, start_date: "09/2023", course: "computer science", school: "university of lagos" },
  ];

  return (
    <>
      <ResumeTopicText topic={"my educational history"} text={"Committed to continuous learning, I have pursued education in computer science and other programs like Data Structures and Algorithms to enhance my technical skills and achieve my goal of becoming a software engineer. My formal education alongside my acquired skills, equips me with the tools to excel in web development."} />
      <EducationMain educationArray={educationDetails} />
    </>
  );
};

export default EducationSection;