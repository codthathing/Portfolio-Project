const ContactDiv = ({ children, className }) => {
  return (
    <div className={`${className} text-center py-6 px-6 md:p-10`}>{children}</div>
  );
};

export default ContactDiv;