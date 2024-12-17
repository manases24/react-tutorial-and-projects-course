import { Outlet } from "react-router-dom";
import { NavBar } from "../../shared";

export const StoreLayout = () => {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
