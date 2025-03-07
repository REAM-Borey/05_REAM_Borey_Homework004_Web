import React, { useState } from "react";

export default function FilterComponent({ materials, onSort }) {
  const [sortOption, setSortOption] = useState("");

  // Prevent page reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSort = (event) => {
    const option = event.target.value;
    setSortOption(option);
    onSort(option);
  };

  return (
    <div>
      <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <select
            id="filterLearningMaterials"
            name="filterLearningMaterials"
            value={sortOption}
            onChange={handleSort}
            className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          >
            <option hidden value="">
              Sort By
            </option>
            <optgroup label="Sort By">
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </optgroup>
          </select>
        </div>
      </form>
    </div>
  );
}
