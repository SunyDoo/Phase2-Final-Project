import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

function ExerciseCard({ exercise, onChangeToday }) {
  const [checked, setChecked] = useState(exercise.today);

  function handleChange() {
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
  }

  return (
    <Container>
      <Card style={{ width: "18rem" }} bg="light" border="dark">
        <Card.Title>{exercise.name}</Card.Title>
        <Card.Img src={exercise.image} alt={exercise.name} />
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          {!checked ? "Add To Today's Workout" : "Remove From Today's Workout"}
        </label>
      </Card>
    </Container>
  );
}

export default ExerciseCard;
