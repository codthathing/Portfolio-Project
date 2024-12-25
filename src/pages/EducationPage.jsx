import ResumeTopicText from "../components/resume/ResumeTopicText";
import EducationMain from "../components/education/EducationMain";

const EducationPage = () => {
  const educationDetails = [
    { id: 0, start_date: "09/2023", course: "computer science", school: "university of lagos" },
  ];

  return (
    <>
      <ResumeTopicText topic={"my educational history"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repudiandae iste deserunt et porro amet quia quibusdam saepe. Deleniti, esse nesciunt similique et eveniet dolorum possimus aperiam eum expedita velit architecto exercitationem, molestias quae pariatur modi soluta voluptates rerum vel. Quia numquam id repellat impedit, facilis minus a non deserunt accusamus? Distinctio rem nemo quasi itaque id vel voluptatum corporis!"} />
      <EducationMain educationArray={educationDetails} />
    </>
  );
};

export default EducationPage;