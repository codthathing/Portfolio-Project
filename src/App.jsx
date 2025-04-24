import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageDiv from "./components/layout/PageDiv";
import HomeName from "./components/ui/HomeName";
import PageLayout from "./components/layout/PageLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  const [hasSeenAnimation, setHasSeenAnimation] = useState(JSON.parse(sessionStorage.getItem("hasSeenAnimation")) || false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      sessionStorage.setItem("hasSeenAnimation", true);
      setHasSeenAnimation(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!hasSeenAnimation ? (
        <PageDiv className={"items-center justify-center absolute w-full h-full"}>
          <HomeName name={"HI"} />
        </PageDiv>
      ) : (
        <Suspense>
          <Routes>
            <Route exact path="/" element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
