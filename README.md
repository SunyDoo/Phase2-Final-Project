# Phase2-Final-Project

## Sunil's Gym

### Overview

Sunil's Card Shop will be a webpage for users who want to plan out their workout at the gym.
Visitors will be able taken to the homepage of the site upon arrival and then can navigate through the various "pages" of the site via the navbar at the top of the page.
Users will also be able to submit a form to create their own exercise to add to the list of available exercises. They will enter the exercise's information as well as a link to a picture of the exercise. They will also be able to immediately add the new exercise to their workout plan for the day.

### Features

The page will load the homepage with a navbar at the top.
The "Exercises" button will bring them all available exercises to choose from. There will also be a filter feature at the top, where users will be able to filter the exercises on screen based on the muscle group that the exercise to designed for.
Each exercise will have a checkbox that will allow users to add the exercise to their workout plan for the day.
The "Add Exercise" button will bring pull up a form that users can fill out to submit their own exercise to the list.
The "Today's Workout" button will display all the exercises the user has selected to do for the day. The checkbox, if unchecked, will dynamically remove the exercise from the list.

### Project Requirements

1. Single page application using create-react-app
2. 8 Total components keeping application organized
3. 4 client-side routes, leading users from Home -> Exercises -> Add Exercise -> Today's Workout
4. Exercises stored in json-server as a RESTful API for backend. Exercises pulled as GET request on page load. When new exercise to submitting, user submission will be added to database via "POST" request. When exercise is added to "Today's Workout", exercise database is updated via "PATCH" request.
5. Application styled via react bootstrap
