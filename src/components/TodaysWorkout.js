import React from "react";
import ExerciseCard from "./ExerciseCard"

function TodaysWorkout({ exercises }) {
  return (
  <div>{
    exercises.map((exercise) => (
      <ExerciseCard key={exercise.id} exercise={exercise} />
    ))
  }</div>)
}

export default TodaysWorkout;