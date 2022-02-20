import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/exercises" exact>
      Exercises
    </NavLink>
    <NavLink to="/addexercise" exact>
      Add Exercise
    </NavLink>
    <NavLink to="/todaysworkout" exact>
      Today's Workout
    </NavLink>
  </div>
  )}

export default NavBar;