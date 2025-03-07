import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";

export default function CardComponent() {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`text-custom-sky-blue font-medium`}>Jan 17, 2025</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          web design
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          Lorem
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>100%</p>
        </div>
        <div className="relative mb-5 w-[100%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-custom-sky-blue h-2.5 rounded-full"></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            1 day left
          </p>
        </div>
      </div>
    </div>
  );
}
