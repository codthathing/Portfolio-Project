import { Outlet, useLocation, useNavigate } from "react-router-dom";
import portfolio_logo from "../../assets/portfolio-logo.svg";
import PageDiv from "./PageDiv";
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";
import { Suspense, useEffect } from "react";
import { usePagePosition } from "../../hooks/usePagePosition";

const PageLayout = ({ animation, setAnimation }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { initialX } = usePagePosition(770, 1030, 2000);

  useEffect(() => {
    const timeout = setTimeout(() => {
      sessionStorage.setItem("hasSeenAnimation", JSON.stringify({ ...animation, pageAnimation: false }));
      setAnimation({ ...animation, pageAnimation: false });
    }, 500);
    return () => clearTimeout(timeout);
  }, [])

  return (
    <PageDiv className={"relative flex-col h-[100dvh] overflow-hidden"} {...((animation.pageAnimation && location === "/") && { initial: { x: initialX }, animate: { x: 0, transition: { duration: 0.5 } } } )}>
      <header className="relative py-4 md:py-8 md:px-12 lg:py-5 lg:px-16 2xl:px-24 flex justify-between items-center">
        <img src={portfolio_logo} className="ml-4 md:m-0 w-10 md:w-16 lg:w-12 cursor-pointer select-none transition-all ease-linear duration-200 hover:animate-pulse" onClick={() => navigate("/")} alt="PORTFOLIO LOGO" />
        <PageNavigation />
      </header>
      <section className="z-10 flex-1 overflow-y-auto overflow-x-hidden change-scrollbar">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </PageDiv>
  );
};

export default PageLayout;
