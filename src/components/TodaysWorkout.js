import React from "react";
import ExerciseCard from "./ExerciseCard";
import { Row, Container } from "react-bootstrap";

function TodaysWorkout({ exercises, onChangeToday }) {
  return (
    <Container fluid={"lg"}>
      <Row xs={3} md={4} className="g-4">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onChangeToday={onChangeToday}
          />
        ))}
      </Row>
    </Container>
  );
}

export default TodaysWorkout;
