const ContactTopicText = ({ topic, text }) => {
  return (
    <>
      <h1 className="font-Yantramanav text-white tracking-widest font-black text-base md:text-3xl lg:text-2xl uppercase">{topic}</h1>
      <p className="text-gray-400 font-Roboto tracking-wider leading-loose mt-2 mb-6 md:mt-5 md:mb-10 lg:mb-8 lg:mt-4 text-[8px] md:text-xs">{text}</p>
    </>
  );
};

export default ContactTopicText;