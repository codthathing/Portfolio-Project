import { Outlet, useNavigate } from "react-router-dom";
import BackgroundStyle from "./BackgroundStyle";
import NavComponent from "./NavComponent";
import ResumeButton from "../common/ResumeButton";
import Footer from "./Footer";

const PageLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-semi relative h-screen flex flex-col overflow-hidden">
      <BackgroundStyle />
      <header className="relative border-b border-gray-400 md:border-0 py-4 md:py-8 md:px-12 lg:py-5 lg:px-16 2xl:px-24 flex justify-between items-center">
        <i className="ml-4 cursor-pointer text-white px-2 py-1 md:px-3.5 md:py-2 lg:px-3 lg:py-1.5 text-base md:text-2xl lg:text-xl border border-white rounded-md" onClick={() => navigate("/")}>AS</i>
        <NavComponent />
        <ResumeButton mainClass={"hidden md:flex"} />
      </header>
      <section className="z-10 flex-1 overflow-y-auto change-scrollbar">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default PageLayout;