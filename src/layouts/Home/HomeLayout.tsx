import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";

export const HomeLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="min-[750px]:ml-[250px]  p-8 h-full max-[750px]:pt-20 ">
        <Outlet />
      </div>
    </div>
  );
};
