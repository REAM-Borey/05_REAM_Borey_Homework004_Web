import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      {/* display card */}
      <div className="flex gap-1 w-[58em] justify-between">
        {dashboard.map((item) => (
          <div
            key={item.id}
            className="flex bg-white gap-5 py-3.5 px-3 rounded-xl w-58"
          >
            <div className={`p-2 rounded-xl ${item.color}`}>
              <img src={item.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{item.totalTasks}</p>
              <p className="text-gray-400">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
