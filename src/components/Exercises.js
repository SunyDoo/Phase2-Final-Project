import React from "react";
import ExerciseCard from "./ExerciseCard"

function Exercises({ exercises }) {
  return (
  <div id="toy-collection">{
    exercises.map((exercise) => (
      <ExerciseCard key={exercise.id} exercise={exercise} />
    ))
  }</div>)
}

export default Exercises;
