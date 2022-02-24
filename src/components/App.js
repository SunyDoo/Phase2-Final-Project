import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Exercises from "./Exercises";
import AddExercise from "./AddExercise";
import TodaysWorkout from "./TodaysWorkout";

function App() {
  const [exercises, setExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((r) => r.json())
      .then((exercises) => setExercises(exercises));
  }, []);

  const todaysExercises = exercises.filter((exercise) => exercise.today);

  const exercisesToDisplay = exercises.filter((exercise) => {
    if (selectedCategory === "All") return true;

    return exercise.musclegroup === selectedCategory;
  });

  function handleUpdate(updatedExercise) {
    const updatedExercises = exercises.map((exercise) => {
      if (exercise.id === updatedExercise.id) {
        return updatedExercise;
      } else {
        return exercise;
      }
    });
    setExercises(updatedExercises);
  }
  function handleAdd(newExercise) {
    setExercises([...exercises, newExercise]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/exercises">
          <Exercises
            exercises={exercisesToDisplay}
            onChangeToday={handleUpdate}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        </Route>
        <Route exact path="/addexercise">
          <AddExercise onAddExercise={handleAdd} />
        </Route>
        <Route exact path="/todaysworkout">
          <TodaysWorkout
            exercises={todaysExercises}
            onChangeToday={handleUpdate}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
