import { Outlet } from "react-router-dom";

const PageBackground = () => {
  return (
    <div className="bg-dark-semi h-[100dvh] w-full">
      <Outlet />
    </div>
  );
};

export default PageBackground;