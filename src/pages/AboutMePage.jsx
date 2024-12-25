import ResumeTopicText from "../components/resume/ResumeTopicText";
import AboutMeMain from "../components/about-me/AboutMeMain";

const AboutMePage = () => {
  const aboutDetails = [
    { id: 0, topic: "name", text: "Akinwunmi Oluwasegun" },
    { id: 1, topic: "phone", text: "+234 90 4344 5618" },
    { id: 2, topic: "email", text: "akinwunmiolusegun277@gmail.com" },
    { id: 3, topic: "experience", text: "2+ years" },
    { id: 4, topic: "nationality", text: "Nigeria" },
    { id: 5, topic: "frontend gig / role", text: "Available" },
    { id: 6, topic: "language", text: "English" },
  ];

  return (
    <>
      <ResumeTopicText topic={"about me"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque rerum quas vero enim excepturi at distinctio quae neque maxime harum, tenetur voluptas asperiores magni assumenda eaque. Vel, recusandae exercitationem. Numquam veritatis error aliquam mollitia odit deleniti voluptate quod eveniet id, libero optio laudantium reiciendis? Neque qui recusandae amet, porro rem, sit ipsa perferendis ratione sed, ex libero maiores temporibus."} />
      <AboutMeMain aboutArray={aboutDetails} />
    </>
  );
};

export default AboutMePage;