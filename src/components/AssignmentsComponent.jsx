import React, { useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <div className="flex justify-between w-[58.5em] mb-6">
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent onAddProject={handleAddProject} />
      </div>

      {/* Display project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects yet. Add a new project!</p>
        ) : (
          projects.map((project, index) => (
            <CardComponent key={index} project={project} />
          ))
        )}
      </div>
    </div>
  );
}
