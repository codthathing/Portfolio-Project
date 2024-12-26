import BackgroundStyle from "./BackgroundStyle";

const PageDiv = ({ children }) => {
  return (
    <div className="bg-dark-semi relative h-screen flex flex-col overflow-hidden">
      <BackgroundStyle />
      {children}
    </div>
  );
};

export default PageDiv;