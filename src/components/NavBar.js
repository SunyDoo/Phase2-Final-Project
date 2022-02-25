import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Image
          src="https://i.pinimg.com/474x/82/7b/3b/827b3bfcc8bc92d96e208a25592186b1.jpg"
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Sunil's Gym Logo"
          roundedCircle
          />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Sunil's Gym</Navbar.Brand>
          <Container>
            <NavLink to="/" exact style={{ color: "white" }} >
                Home
            </NavLink>
            <NavLink to="/exercises" exact style={{ color: "white" }}>
                Exercises
            </NavLink>
            <NavLink to="/addexercise" exact style={{ color: "white" }}>
                Add Exercise
            </NavLink>
            <NavLink to="/todaysworkout" exact style={{ color: "white" }}>
                Today's Workout
            </NavLink>
          </Container>
      </Navbar>
  );
}

export default NavBar;
