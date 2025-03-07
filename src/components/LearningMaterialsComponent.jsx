import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";
import { Star } from "lucide-react";

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(learningMaterials);

  const toggleFavorite = (id) => {
    setMaterials((prevMaterials) =>
      prevMaterials.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const handleSort = (option) => {
    let sortedMaterials = [...materials];

    if (option === "A-Z") {
      sortedMaterials.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "Z-A") {
      sortedMaterials.sort((a, b) => b.title.localeCompare(a.title));
    }

    setMaterials(sortedMaterials);
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-auto gap-x-5">
      {/* calling filter component */}
      <FilterComponent materials={materials} onSort={handleSort} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-2 overflow-auto sticky top-0 max-h-[25em]">
        {materials.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 px-4 py-2 flex gap-5 items-center rounded-md shadow-md"
          >
            {/* Display Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-13 h-13 object-cover rounded-md"
            />

            {/* Content Section */}
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {/* Clickable Star Icon */}
                <button onClick={() => toggleFavorite(item.id)}>
                  {item.isFavorite ? (
                    <Star size={20} fill="orange" strokeWidth={0} />
                  ) : (
                    <Star size={20} />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Posted: {formatDate(item.postedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
