import { useEffect, useState, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageDiv from "./components/layout/PageDiv";
import HomeName from "./components/ui/HomeName";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import PageBackground from "./components/layout/PageBackground";
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  const [hasSeenAnimation, setHasSeenAnimation] = useState(JSON.parse(sessionStorage.getItem("hasSeenAnimation")) || { loadAnimation: false, pageAnimation: true });

  useEffect(() => {
    const timeout = setTimeout(() => {
      sessionStorage.setItem("hasSeenAnimation", JSON.stringify({ ...hasSeenAnimation, loadAnimation: true }));
      setHasSeenAnimation({ ...hasSeenAnimation, loadAnimation: true });
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<PageBackground />}>
        {!hasSeenAnimation.loadAnimation ? (
          <Route
            index
            element={
              <PageDiv key={"splash"} className={"items-center justify-center absolute w-full h-full"}>
                <HomeName name={"HI"} />
              </PageDiv>
            }
          />
        ) : (
          <Route element={<PageLayout animation={hasSeenAnimation} setAnimation={setHasSeenAnimation} />}>
            <Route index element={<HomePage animation={hasSeenAnimation} />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        )}
      </Route>
    </Routes>
  );
}

export default App;
