import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter By Muscle Group</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Abdominals">Abdominals</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Legs">Legs</option>
        <option value="Biceps">Biceps</option>
        <option value="Triceps">Triceps</option>
      </select>
    </div>
  );
}

export default Filter;
