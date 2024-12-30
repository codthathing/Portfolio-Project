const AboutMeMain = ({ aboutArray }) => {
  return (
    <main className="grid gap-y-1.5 md:gap-y-6 lg:gap-y-4 lg:grid-cols-2">
      {aboutArray.map(({ id, topic, text, type = "text" }) => {
        return (
          <div key={id} className="flex items-center gap-x-1 md:gap-x-4 lg:gap-x-3 text-xs md:text-xl lg:text-lg">
            <span className="font-Roboto text-grey-textdark capitalize">{topic}:</span>
            <a {...(type === "link" && { href: `mailto:${text}`, target: "_blank" })} className="font-Yantramanav text-white">{text}</a>
          </div>
        );
      })}
    </main>
  );
};

export default AboutMeMain;