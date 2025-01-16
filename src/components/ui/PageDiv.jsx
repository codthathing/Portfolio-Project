import BackgroundStyle from "./BackgroundStyle";

const PageDiv = ({ className, children }) => {
  return (
    <div className={`bg-dark-semi flex h-screen ${className}`}>
      <BackgroundStyle />
      {children}
    </div>
  );
};

export default PageDiv;