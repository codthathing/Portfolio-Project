import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/ui/PageLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;