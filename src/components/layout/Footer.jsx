import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRobot, FaArrowRight, FaXmark, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialsPages = [
    { id: 0, text: "Twitter", Icon: FaXTwitter, socialsLink: "https://x.com/codthathing" },
    { id: 1, text: "Linkedin", Icon: FaLinkedin, socialsLink: "https://linkedin.com/in/codthathing" },
    { id: 2, text: "Github", Icon: FaGithub, socialsLink: "https://github.com/codthathing" },
  ];
  const location = useLocation().pathname;
  const [showInformation, setShowInformation] = useState({ div: true, section: true });
  const [informationDetails, setInformationDetails] = useState({
    array: [
      { id: 0, text: "Welcome to my portfolio!" },
      { id: 1, text: "On mobile: Explore using the navigation menu at the top-right" },
      { id: 2, text: "Click on the robot to expand/collapse" },
      { id: 3, text: "Click on the icon at the top-left to navigate to the front page" },
      { id: 4, text: "Click on the email address to send an email directly" },
    ], text: "Welcome to my portfolio!",
  });

  useEffect(() => {
    let changeText = 0;
    const timeInterval = setInterval(() => {
      changeText = changeText < informationDetails.array.length - 1 ? changeText += 1 : 0;
      setInformationDetails(prevState => ({ ...prevState, text: informationDetails.array.find(({ id }) => id === changeText).text }))
    }, 5000);
    return () => clearInterval(timeInterval);
  }, []);
  
  return (
    <footer className={`relative p-4 md:py-8 md:px-10 lg:py-5 lg:px-16`}>
      <div className={`${location !== "/" ? "invisible" : ""} md:visible flex items-center gap-x-5 md:gap-x-10 lg:gap-x-7`}>
        {socialsPages.map(({ id, text, Icon, socialsLink }) => <a key={id} target="_blank" aria-label={text} href={socialsLink}><Icon className="text-gray-400 text-base md:text-2xl lg:text-xl transition-all ease-linear duration-200 hover:scale-125" /></a>)}
      </div>
      <div className={`absolute right-4 bottom-4 md:right-10 md:bottom-8 lg:right-16 lg:bottom-5 max-w-[60%] md:max-w-[65%] text-white bg-grey-dark/50 backdrop-blur-sm rounded-full shadow-lg border border-grey-dark/20 p-2 md:p-4 lg:p-3 ${showInformation.div ? "visible" : "invisible"} flex items-center gap-x-2 md:gap-x-4 lg:gap-x-3`}>
        <FaRobot onClick={() => setShowInformation(prevState => ({ ...prevState, section: !prevState.section }))} className="text-sm md:text-2xl lg:text-xl cursor-pointer" />
        <section className={`${showInformation.section ? "flex" : "hidden"} items-center gap-x-2 md:gap-x-4 lg:gap-x-3`}>
          <FaArrowRight className="md:text-lg lg:text-base hidden md:block" />
          <span className=" text-[8px] md:text-lg lg:text-base font-Roboto">{informationDetails.text}</span>
          <FaXmark onClick={() => setShowInformation(prevState => ({ ...prevState, div: false }))} className="lg:text-base hidden lg:block cursor-pointer" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;