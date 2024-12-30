import ResumeTopicText from "../components/resume/ResumeTopicText";
import AboutMeMain from "../components/about-me/AboutMeMain";

const AboutMePage = () => {
  const aboutDetails = [
    { id: 0, topic: "name", text: "Akinwunmi Oluwasegun" },
    { id: 1, topic: "phone", text: "+234 90 4344 5618" },
    { id: 2, topic: "email", text: "akinwunmiolusegun277@gmail.com", type: "link" },
    { id: 3, topic: "experience", text: "2+ years" },
    { id: 4, topic: "nationality", text: "Nigeria" },
    { id: 5, topic: "frontend gig / role", text: "Available" },
    { id: 6, topic: "language", text: "English" },
  ];

  return (
    <>
      <ResumeTopicText topic={"about me"} text={"Hey, I'm OLUWASEGUN! a Frontend engineer interested in building amazing things in the tech world. I've learned different languages, frameworks, and tech tools, combining them together to build web applications that stand out. Being able to build real-world projects from ideas has been a fascinating experience on my tech journey so far. I've learned problem-solving and how to provide the best experience for users. I'm all about that 'yeah' moment when everything just clicks. \n\nSo, if you are looking to work with a developer that builds awesome web applications and enjoys the journey just as much as the destination, I'm your best person!"} />
      <AboutMeMain aboutArray={aboutDetails} />
    </>
  );
};

export default AboutMePage;