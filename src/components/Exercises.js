import React from "react";
import ExerciseCard from "./ExerciseCard";
import Filter from "./FilterExercise";
import { Row, Container } from "react-bootstrap";

function Exercises({
  exercises,
  onChangeToday,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <>
      <div>
        <Filter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <Container fluid={"lg"}>
        <Row xs={3} md={4} className="g-4">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onChangeToday={onChangeToday}
              className="card"
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Exercises;
