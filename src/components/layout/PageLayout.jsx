import { Outlet, useBlocker, useLocation, useNavigate } from "react-router-dom";
import portfolio_logo from "../../assets/portfolio-logo.svg";
import PageDiv from "./PageDiv";
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";
import { Suspense, useEffect, useMemo } from "react";

const PageLayout = ({ animation, setAnimation }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const initialX = useMemo(() => {
    return window.innerWidth < 768 ? 600 : window.innerWidth < 1024 ? 1200 : 2250;
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      sessionStorage.setItem("hasSeenAnimation", JSON.stringify({ ...animation, pageAnimation: false }));
      setAnimation({ ...animation, pageAnimation: false });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <PageDiv {...((animation.pageAnimation && location === "/") && { initial: { x: initialX }, animate: { x: 0, transition: { duration: 0.5 } } } )} className={"relative flex-col h-[100dvh] overflow-hidden"}>
      <header className="relative py-4 md:py-8 md:px-12 lg:py-5 lg:px-16 2xl:px-24 flex justify-between items-center">
        <img src={portfolio_logo} className="ml-4 md:m-0 w-10 md:w-16 lg:w-12 cursor-pointer select-none transition-all ease-linear duration-200 hover:animate-pulse" onClick={() => navigate("/")} alt="PORTFOLIO LOGO" />
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
