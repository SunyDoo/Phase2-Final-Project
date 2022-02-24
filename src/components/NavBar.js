import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src="https://i.pinimg.com/474x/82/7b/3b/827b3bfcc8bc92d96e208a25592186b1.jpg"
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Sunil's Gym Logo"
          />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Sunil's Gym</Navbar.Brand>
          <Container>
            <NavLink to="/" exact >
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
          </Container>
      </Navbar>
  );
}

export default NavBar;
