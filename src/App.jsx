import "./App.css";
import DashboardComponent from "./components/DashboardComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import CardComponent from "./components/CardComponent";
import AssignCoponent from "./components/AssignmentsComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-full h-full flex bg-gray-100 justify-between">
        <div className="w-[20%]">
          <SidebarComponent />
        </div>
        <div className="justify-center w-full p-5">
          <div>
            <TopNavbarComponent />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
          <div className="flex w-full justify-between pt-2">
            <div className="w-[75%] h-20 justify-between">
              <div className="flex w-full gap-1">
                <DashboardComponent />
              </div>
              <div className="w-full flex justify-between items-center pt-5">
                <AssignCoponent />
              </div>
              <div className="w-full h-118 sticky top-0 overflow-auto max-h-[500px] grid grid-cols-3 gap-4 pt-5">
                <CardComponent />
                {}
              </div>
            </div>
            <div className="w-[23%]">
              <LearningMaterialsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
