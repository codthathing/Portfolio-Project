import BackgroundStyle from "./BackgroundStyle";

const PageDiv = ({ className, children }) => {
  return (
    <div className={`bg-dark-semi flex ${className}`}>
      <BackgroundStyle />
      {children}
    </div>
  );
};

export default PageDiv;