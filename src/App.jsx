import { useEffect, useState, lazy, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import PageDiv from "./components/layout/PageDiv";
import HomeName from "./components/ui/HomeName";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import PageBackground from "./components/layout/PageBackground";
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  const [hasSeenAnimation, setHasSeenAnimation] = useState(false);
  // const [hasSeenAnimation, setHasSeenAnimation] = useState(JSON.parse(sessionStorage.getItem("hasSeenAnimation")) || false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      // sessionStorage.setItem("hasSeenAnimation", true);
      setHasSeenAnimation(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<PageBackground />}>
          {!hasSeenAnimation ? (
            <Route index element={
              <PageDiv key={"splash"} className={"items-center justify-center absolute w-full h-full"}>
                <HomeName name={"HI"} />
              </PageDiv>
            }/>
          ) : (
            <Route element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          )} 
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
