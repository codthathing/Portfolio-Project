import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/ui/PageLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import PageDiv from "./components/ui/PageDiv";
import HomeName from "./components/ui/HomeName";
import { useEffect, useState } from "react";

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
      {!hasSeenAnimation && (
        <Routes>
          <Route
            path="/"
            element={
              <PageDiv className={"fixed items-center justify-center z-30 w-full"}>
                <HomeName name={"HI"} />
              </PageDiv>
            }
          />
        </Routes>
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
}

export default App;
