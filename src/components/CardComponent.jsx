import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ project }) {
  // Validate project prop exists
  if (!project || !project.dueDate) {
    return <div>Error: Invalid project data</div>;
  }

  // Calculate days left with error handling
  const dueDate = new Date(project.dueDate);
  const today = new Date();
  let daysLeft = "N/A";

  if (!isNaN(dueDate.getTime())) {
    const timeDiff = dueDate - today;
    daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          <p className="text-custom-sky-blue font-medium">
            {isNaN(dueDate.getTime())
              ? "Invalid Date"
              : dueDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {project.name || "Unnamed Project"}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {project.description || "No description"}
        </p>

        {/* Progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress || 0}%</p>
        </div>
        <div className="relative mb-5 w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-custom-sky-blue h-2.5 rounded-full"
            style={{ width: `${project.progress || 0}%` }}
          ></div>
        </div>

        {/* Deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            {daysLeft === "N/A"
              ? "Invalid Date"
              : daysLeft > 0
              ? `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`
              : "Overdue"}
          </p>
        </div>
      </div>
    </div>
  );
}
