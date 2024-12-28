const ResumeTopicText = ({ topic, text }) => {
  return (
    <>
      <h1 className="tracking-widest font-bold font-Yantramanav capitalize text-xl md:text-4xl lg:text-3xl text-white">{topic}</h1>
      <p className="text-grey-textdark whitespace-pre-line tracking-wider font-Roboto text-xs md:text-xl lg:text-base mt-2 mb-4 md:mt-8 md:mb-16 lg:mt-6 lg:mb-14">{text}</p>
    </>
  );
};

export default ResumeTopicText;