import React from "react";
import ExerciseCard from "./ExerciseCard"
import Filter from "./FilterExercise"

function Exercises({ exercises, onChangeToday, selectedCategory, handleCategoryChange }) {
  return (
  <div>
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {
        exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} onChangeToday={onChangeToday} />
        ))
        }
  </div>)
}

export default Exercises;
