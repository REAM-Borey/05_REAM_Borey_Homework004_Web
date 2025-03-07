import "./App.css";
import DashboardComponent from "./components/DashboardComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import CardComponent from "./components/CardComponent";
import AssignCoponent from "./components/AssignmentsComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";

import { useState } from "react";

function App() {
  // State to store projects
  const [projects, setProjects] = useState([
    {
      name: "Web Design",
      dueDate: "2025-01-17",
      progress: "100",
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

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
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            {/* Add New Project Button */}
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
                {projects.map((project, index) => (
                  <CardComponent key={index} project={project} />
                ))}
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
