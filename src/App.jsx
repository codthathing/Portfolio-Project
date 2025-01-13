import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/ui/PageLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
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
      <Routes>
        <Route exact path="/" element={<PageLayout showFooterHeader={hasSeenAnimation} />}>
          {!hasSeenAnimation && (
            <Route
              index
              element={
                <div className="flex items-center justify-center h-full">
                  <HomeName name={"HI"} />
                </div>
              }
            />
          )}
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
