const ContactPage = () => {
  return (
    <main className="md:flex md:justify-center md:items-center md:h-full">
      <main className="grid py-10 px-4 gap-y-4 md:py-10 md:gap-y-10 lg:gap-y-0 lg:grid-cols-2 md:w-2/4 lg:w-3/5 lg:gap-x-4">
        <div className="text-center py-6 px-6 md:p-10">
          <h1 className="font-Yantramanav text-white tracking-widest font-black text-base md:text-3xl lg:text-2xl uppercase">contact</h1>
          <p className="text-gray-400 font-Roboto tracking-wider leading-loose mt-2 mb-6 md:mt-5 md:mb-10 lg:mb-8 lg:mt-4 text-[8px] md:text-xs">Whether you're interested in networking, job opportunities, or casual conversation, I'm eager to connect and learn from our interactions!</p>
          <section className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-6">
            <div>
              <h3 className="font-Yantramanav text-white tracking-widest mb-1 md:mb-3 lg:mb-2 text-xs md:text-2xl lg:text-lg">Address</h3>
              <p className="text-gray-400 font-Roboto tracking-wider leading-loose text-[8px] md:text-xs">Ikorodu, Nigeria</p>
            </div>
            <div>
              <h3 className="font-Yantramanav text-white tracking-widest mb-1 md:mb-3 lg:mb-2 text-xs md:text-2xl lg:text-lg">Email</h3>
              <p className="text-gray-400 font-Roboto tracking-wider leading-loose text-[8px] md:text-xs">akinwunmiolusegun2772gmail.com</p>
            </div>
          </section>
        </div>
        <div className="backdrop-blur backdrop-filter bg-neutral-900/30 shadow-xl py-6 px-6 md:p-10 text-center">
          <h1 className="font-Yantramanav text-white tracking-widest font-black text-base md:text-3xl lg:text-2xl uppercase">contact form</h1>
          <p className="text-gray-400 font-Roboto tracking-wider leading-loose mt-2 mb-6 md:mt-5 md:mb-10 lg:mb-8 lg:mt-4 text-[8px] md:text-xs">Send a direct message</p>
          <form>
            <div className="flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-4">
              <input type="text" placeholder="Your name" className="text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:text-gray-400 tracking-wider focus:border-neutral-500 focus:outline-none" name="" id="" />
              <input type="text" placeholder="Your email" className="text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:text-gray-400 tracking-wider focus:border-neutral-500 focus:outline-none" name="" id="" />
              <textarea placeholder="Messaage" className="text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:text-gray-400 tracking-wider focus:border-neutral-500 focus:outline-none" name="" id="" />
            </div>
            <button type="submit" className="font-Yantramanav mt-6 md:mt-10 lg:mt-8 py-2 px-4 md:px-5 md:py-3 text-xs md:text-lg lg:text-base rounded-lg text-white bg-zinc-800 bg-opacity-30 uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0">SEND MESSAGE</button>
          </form>
        </div>
      </main>
    </main>
  );
};

export default ContactPage;