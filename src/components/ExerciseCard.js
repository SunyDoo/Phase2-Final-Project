import React, { useState } from "react";
import Card from 'react-bootstrap/Card'

function ExerciseCard({ exercise, onChangeToday }) {

    const [checked, setChecked] = useState(exercise.today)

    function handleChange () {
        setChecked((checked) => !checked);
        fetch(`http://localhost:3000/exercises/${exercise.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          today: !checked,
        }),
      })
      .then((r) => r.json())
      .then((updatedexercise) => onChangeToday(updatedexercise));
    };



  return (
    <div>
      <h2>{exercise.name}</h2>
      <img
        src={exercise.image}
        alt={exercise.name}
      />
       <label>
        <input 
        type="checkbox"
        checked = {checked}
        onChange = {handleChange} 
        />
        {!checked? "Add To Today's Workout" : "Remove From Today's Workout"}        
      </label>
    </div>
  );
}

export default ExerciseCard;