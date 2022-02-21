import React, { useState } from "react";

function AddExercise({ onAddExercise }) {

  const [exercise, setExercise] = useState("")
  const [image, setImage] = useState("")
  const [musclegroup, setMuscleGroup] = useState("Chest")
  const [checked, setChecked] = useState(false)



  function handleSubmit(e) {
    e.preventDefault();
    const exerciseData = {
      name: exercise,
      musclegroup: musclegroup,
      image: image,
      today: checked
    };
    fetch('http://localhost:3000/exercises', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exerciseData),
  })
    .then((r) => r.json())
    .then((newExercise) => onAddExercise(newExercise));

  }

  return (
    <div className="container">
      <form className="NewExercise"onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Muscle Group:
        <select
          name="category"
          value={musclegroup}
          onChange={(e) => setMuscleGroup(e.target.value)}
        >
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Abdominals">Abdominals</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Legs">Legs</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
        </select>
      </label>
      <label>
        Add To Today's Workout
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((checked=>!checked))}
        />
      </label>
      <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
}

export default AddExercise;
