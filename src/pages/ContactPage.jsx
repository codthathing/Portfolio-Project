import PageMain from "../components/layout/PageMain";
import ContactDiv from "../components/contact/ContactDiv";
import ContactTopicText from "../components/contact/ContactTopicText";
import ContactInput from "../components/contact/ContactInput";
import { useState } from "react";

const ContactPage = () => {
  const contactInfo = [
    { id: 0, topic: "Address", text: "Lagos, Nigeria", type: "text" },
    { id: 1, topic: "Email", text: "akinwunmiolusegun277@gmail.com", type: "link" },
  ];

  const [contactInput, setContactInput] = useState({ name: "", email: "", message: "" });
  const handleContactInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInput({ ...contactInput, [name]: value });
  };

  return (
    <PageMain className={"md:pt-44 md:flex md:justify-center md:items-center md:h-full select-none"}>
      <main className="grid py-10 px-4 gap-y-4 md:py-10 md:gap-y-10 lg:gap-y-0 lg:grid-cols-2 md:w-2/4 lg:w-3/5 lg:gap-x-4">
        <ContactDiv>
          <ContactTopicText topic={"contact"} text={"Whether you're interested in networking, job opportunities, or casual conversation, I'm eager to connect and learn from our interactions!"} />
          <section className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-6">
            {contactInfo.map(({ id, topic, text, type }) => {
              return (
                <div key={id}>
                  <h3 className="font-Yantramanav text-white tracking-widest mb-1 md:mb-3 lg:mb-2 text-xs md:text-2xl lg:text-lg">{topic}</h3>
                  <a {...(type === "link" && { href: `mailto:${text}`, target: "_blank" })} className={`${type === "link" ? "transition-all ease-linear duration-200 hover:border-b hover:border-gray-400" : ""} text-gray-400 font-Roboto tracking-wider leading-loose text-[8px] md:text-xs`}>{text}</a>
                </div>
              );
            })}
          </section>
        </ContactDiv>
        <ContactDiv className={"backdrop-blur backdrop-filter bg-neutral-900/30 shadow-xl"}>
          <ContactTopicText topic={"contact form"} text={"Send a direct message"} />
          <form>
            <div className="flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-4">
              <ContactInput type={"text"} name={"name"} value={contactInput.name} onChange={handleContactInput} placeholder={"Your name"} />
              <ContactInput type={"email"} name={"email"} value={contactInput.email} onChange={handleContactInput} placeholder={"Your email"} />
              <textarea name="message" value={contactInput.message} onChange={handleContactInput} placeholder="Messaage" required className="text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:text-gray-400 tracking-wider focus:border-neutral-500 focus:outline-none" id="" />
            </div>
            <button type="button" className="font-Yantramanav mt-6 md:mt-10 lg:mt-8 py-2 px-4 md:px-5 md:py-3 text-xs md:text-lg lg:text-base rounded-lg text-white bg-zinc-800 bg-opacity-30 uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0">SEND MESSAGE</button>
          </form>
        </ContactDiv>
      </main>
    </PageMain>
  );
};

export default ContactPage;