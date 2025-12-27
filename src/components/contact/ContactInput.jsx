const ContactInput = ({ type, name, value, onChange, placeholder, inputStyle }) => {
  return <input type={type} name={name} autoComplete="on" value={value} onChange={onChange} placeholder={placeholder} required className={`text-gray-400 text-[8px] md:text-sm lg:text-xs py-2 lg:py-3 font-Roboto w-full shadow-inset border-b border-neutral-700 bg-transparent placeholder:${inputStyle} tracking-wider focus:border-neutral-500 focus:outline-none`} />;
};

export default ContactInput;
