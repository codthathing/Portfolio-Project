import AboutMeSection from "../../features/about-me/AboutMeSection";
import EducationSection from "../../features/education/EducationSection";
import ExperienceSection from "../../features/ExperienceSection";
import SkillsSection from "../../features/SkillsSection";
import AchievementSection from "../../features/AchievementSection";

const ResumeLayout = ({ resumeShown }) => {
  const Layout = () => {
    if (resumeShown === "about me") {
      return <AboutMeSection />;
    } else if (resumeShown === "education") {
      return <EducationSection />;
    } else if (resumeShown === "experience") {
      return <ExperienceSection />;
    } else if (resumeShown === "skills") {
      return <SkillsSection />;
    } else if (resumeShown === "achievement") {
      return <AchievementSection />;
    }
  };

  return (
    <main className="lg:col-span-2 lg:h-full overflow-y-auto change-scrollbar py-6 md:py-12 lg:p-8">
      <Layout />
    </main>
  );
};

export default ResumeLayout;