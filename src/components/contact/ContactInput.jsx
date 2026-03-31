const ContactInput = ({ type, name, value, onChange, placeholder, inputStyle }) => {
  return <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required className={`font-Roboto shadow-inset bg-neutral-900 text-gray-400 text-[8px] md:text-sm lg:text-xs px-1 py-2 lg:py-3 outline-none w-full border-b border-neutral-700 tracking-wider focus:border-neutral-500 ${inputStyle}`} />;
};

export default ContactInput;
