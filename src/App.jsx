import { Route, Routes, useLocation } from "react-router-dom";
import PageLayout from "./components/ui/PageLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import HomeName from "./components/ui/HomeName";
import { useEffect, useState } from "react";

function App() {
  const location = decodeURIComponent(useLocation().pathname);
  const [hasSeenAnimation, setHasSeenAnimation] = useState(JSON.parse(sessionStorage.getItem("hasSeenAnimation")) || false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      sessionStorage.setItem("hasSeenAnimation", true);
      setHasSeenAnimation(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {(location === "/" && !hasSeenAnimation) && (
        <div className="fixed w-full h-full bg-dark-semi flex items-center justify-center top-0 left-0 z-50 text-red-500">
          <HomeName name={"HI"} className={"text-2xl md:text-6xl lg:text-4xl"} />
        </div>
      )}
      <Routes>
        <Route exact path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;