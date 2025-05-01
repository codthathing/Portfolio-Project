import { Outlet, useNavigate } from "react-router-dom";
import portfolio_logo from "../../assets/portfolio-logo.svg";
import PageDiv from "./PageDiv";
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";
import { Suspense } from "react";

const PageLayout = () => {
  const navigate = useNavigate();

  return (
    <PageDiv className={"relative flex-col h-screen overflow-hidden"}>
      <header className="relative py-4 md:py-8 md:px-12 lg:py-5 lg:px-16 2xl:px-24 flex justify-between items-center">
        <img src={portfolio_logo} className="ml-4 md:m-0 w-10 md:w-16 lg:w-12 cursor-pointer transition-all ease-linear duration-200 hover:animate-pulse" onClick={() => navigate("/")} alt="PORTFOLIO LOGO" />
        <PageNavigation />
      </header>
      <section className="z-10 flex-1 overflow-y-auto change-scrollbar">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </PageDiv>
  );
};

export default PageLayout;
