const ContactInput = ({ type, name, value, onChange, placeholder }) => {
  return <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required className="text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full border-b border-neutral-700 bg-transparent placeholder:text-gray-400 tracking-wider focus:border-neutral-500 focus:outline-none" />;
};

export default ContactInput;