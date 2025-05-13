import { Outlet } from "react-router-dom";
import BackgroundStyle from "../ui/BackgroundStyle";

const PageBackground = () => {
  return (
    <div className="bg-dark-semi h-screen w-screen">
      <BackgroundStyle />
      <Outlet />
    </div>
  );
};

export default PageBackground;