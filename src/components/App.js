import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Exercises from "./Exercises";
import AddExercise from "./AddExercise";
import TodaysWorkout from "./TodaysWorkout";

function App() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/exercises')
      .then((r) => r.json())
      .then((exercises) => setExercises(exercises));
  }, []);










  return (   
    <div>
      <NavBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/exercises">
          <Exercises exercises={exercises} />
        </Route>
        <Route exact path="/addexercise">
          <AddExercise />
        </Route>
        <Route exact path="/todaysworkout">
          <TodaysWorkout />
        </Route>
    </Switch>
    </div>
  )
}

export default App;