import PageMain from "../components/layout/PageMain";
import ContactDiv from "../components/contact/ContactDiv";
import ContactTopicText from "../components/contact/ContactTopicText";
import ContactInput from "../components/contact/ContactInput";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaX } from "react-icons/fa6";

const ContactPage = () => {
  const contactInfo = [
    { id: 0, topic: "Address", text: "Lagos, Nigeria", type: "text" },
    { id: 1, topic: "Email", text: "akinwunmiolusegun277@gmail.com", type: "link" },
  ];

  const [showPopUp, setShowPopUp] = useState(false);

  const [contactInput, setContactInput] = useState({ name: "", email: "", title: "", message: "" });
  const handleContactInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInput({ ...contactInput, [name]: value });
  };

  const [contactInputStyle, setContactInputStyle] = useState({ name: "", email: "", title: "", message: "" });

  const handleEmailSubmit = () => {
    if (contactInput.name && contactInput.email && contactInput.title && contactInput.message) {
      emailjs.send("service_f904uuc", "template_xp3618s", { name: contactInput.name, email: contactInput.email, title: contactInput.title, message: contactInput.message }, "WlCoMP40HZDFpDPbX").then(
        (response) => console.log("SUCCESS!", response.status, response.text),
        (error) => console.log("FAILED...", error)
      );
      setContactInput({ name: "", email: "", title: "", message: "" });
      setShowPopUp(true);
    } else {
      setContactInputStyle({ name: `text-${contactInput.name ? "gray" : "red"}-400`, email: `text-${contactInput.email ? "gray" : "red"}-400`, title: `text-${contactInput.title ? "gray" : "red"}-400`, message: `text-${contactInput.message ? "gray" : "red"}-400` });
    }
  };

  return (
    <>
      {showPopUp && (
        <main className="fixed w-full top-0 right-0 md:w-fit md:top-6 md:right-6 lg:top-4 lg:right-10">
          <div className="relative py-6 md:py-8 md:px-20 lg:py-6 bg-neutral-800/50 backdrop-blur-sm text-gray-400 md:rounded-tl-3xl md:rounded-br-3xl">
            <p className="text-center text-xs md:text-xl lg:text-base">Message Sent!</p>
            <FaX className="absolute top-3 right-3 md:top-4 md:right-4 lg:top-2 lg:right-2 text-white text-xs md:text-base cursor-pointer" onClick={() => setShowPopUp(false)} />
          </div>
        </main>
      )}
      <PageMain className={"md:pt-44 md:flex md:justify-center md:items-center md:h-full select-none"}>
        <main className="grid py-10 px-4 gap-y-4 md:py-10 md:gap-y-10 lg:gap-y-0 lg:grid-cols-2 md:w-2/4 lg:w-3/5 lg:gap-x-4">
          <ContactDiv>
            <ContactTopicText topic={"contact"} text={"Whether you're interested in networking, job opportunities, or casual conversation, I'm eager to connect and learn from our interactions!"} />
            <section className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-6">
              {contactInfo.map(({ id, topic, text, type }) => {
                return (
                  <div key={id}>
                    <h3 className="font-Yantramanav text-white tracking-widest mb-1 md:mb-3 lg:mb-2 text-xs md:text-2xl lg:text-lg">{`<${topic} />`}</h3>
                    <a {...(type === "link" && { href: `mailto:${text}`, target: "_blank" })} className={`${type === "link" ? "transition-all ease-linear duration-200 hover:border-b hover:border-gray-400" : ""} text-gray-400 font-Roboto tracking-wider leading-loose text-[8px] md:text-xs`}>
                      {text}
                    </a>
                  </div>
                );
              })}
            </section>
          </ContactDiv>
          <ContactDiv className={"backdrop-blur backdrop-filter bg-neutral-900/30 shadow-xl"}>
            <ContactTopicText topic={"contact form"} text={"Send a direct message"} />
            <form>
              <div className="flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-4">
                <ContactInput type={"text"} name={"name"} value={contactInput.name} onChange={handleContactInput} placeholder={"Your Name"} inputStyle={contactInputStyle.name} />
                <ContactInput type={"email"} name={"email"} value={contactInput.email} onChange={handleContactInput} placeholder={"Your Email"} inputStyle={contactInputStyle.email} />
                <ContactInput type={"text"} name={"title"} value={contactInput.title} onChange={handleContactInput} placeholder={"Email Title"} inputStyle={contactInputStyle.title} />
                <textarea name="message" value={contactInput.message} onChange={handleContactInput} placeholder="Message" required className={`text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:${contactInputStyle.message} resize-none tracking-wider focus:border-neutral-500 focus:outline-none`} id="" />
              </div>
              <button type="button" onClick={handleEmailSubmit} className="font-Yantramanav mt-6 md:mt-10 lg:mt-8 py-2 px-4 md:px-5 md:py-3 text-xs md:text-lg lg:text-base rounded-lg text-white bg-zinc-800 bg-opacity-30 uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0">
                SEND MESSAGE
              </button>
            </form>
          </ContactDiv>
        </main>
      </PageMain>
    </>
  );
};

export default ContactPage;
