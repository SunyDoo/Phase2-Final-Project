import React from "react";
import ExerciseCard from "./ExerciseCard"

function TodaysWorkout({ exercises, onChangeToday }) {
  return (
  <div>{
    exercises.map((exercise) => (
      <ExerciseCard key={exercise.id} exercise={exercise} onChangeToday={onChangeToday} />
    ))
  }</div>)
}

export default TodaysWorkout;