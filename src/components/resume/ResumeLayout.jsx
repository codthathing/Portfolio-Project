import AboutMePage from "../../pages/AboutMePage";
import EducationPage from "../../pages/EducationPage";
import ExperiencePage from "../../pages/ExperiencePage";
import SkillsPage from "../../pages/SkillsPage";
import AchievementPage from "../../pages/AchievementPage";

const ResumeLayout = ({ resumeShown }) => {
  const Layout = () => {
    if (resumeShown === "about me") {
      return <AboutMePage />;
    } else if (resumeShown === "education") {
      return <EducationPage />;
    } else if (resumeShown === "experience") {
      return <ExperiencePage />;
    } else if (resumeShown === "skills") {
      return <SkillsPage />;
    } else if (resumeShown === "achievement") {
      return <AchievementPage />;
    }
  };

  return (
    <main className="lg:col-span-2 lg:h-full overflow-y-auto change-scrollbar py-6 md:py-12 lg:p-8">
      <Layout />
    </main>
  );
};

export default ResumeLayout;