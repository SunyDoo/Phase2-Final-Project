import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Exercises from "./Exercises";
import AddExercise from "./AddExercise";
import TodaysWorkout from "./TodaysWorkout";

function App() {
  return (   
    <div>
      <NavBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/addexercise">
          <AddExercise />
        </Route>
        <Route path="/todaysworkout">
          <TodaysWorkout />
        </Route>
    </Switch>
    </div>
  )
}

export default App;