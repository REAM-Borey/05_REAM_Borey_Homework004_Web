import React from "react";

export default function DashboardComponent() {
  return (
    <div>
      {/* display summary on each card */}
      <div className="flex gap-5">
        <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-58">
          <div className="p-3 rounded-xl bg-custom-sky-blue">
            <img src="/fi-sr-file.svg" alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">11</p>
            <p className="text-gray-400">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
