import React, { useState } from "react";

function ExerciseCard({ exercise }) {
  return (
    <div className="card">
      <h2>{exercise.name}</h2>
      <img
        src={exercise.image}
        alt={exercise.name}
      />
    </div>
  );
}

export default ExerciseCard;