import React from "react";
import Mainmenu from "./components/mainmenu";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <Mainmenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
