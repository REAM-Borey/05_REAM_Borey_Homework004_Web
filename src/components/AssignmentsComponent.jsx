import React from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";

export default function AssignmentsComponent() {
  return (
    <div>
      <div className="flex justify-between w-[58.5em]">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent />
      </div>
    </div>
  );
}
