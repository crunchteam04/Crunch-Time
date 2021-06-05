//capture data from localstorage

var userPotato = JSON.parse(localStorage.getItem("userData"));
var choosenWorkoutEL = document.querySelector("#choosenWorkout");
var nextWorkoutEl = document.querySelector("#nextWorkout");
var userWorkouts = userPotato.chosenWorkouts;
var currentWorkoutIndex = 0;
var firstExercise = userWorkouts[currentWorkoutIndex];

var chosenWorkoutImagesEL = document.querySelector("#chosenWorkoutImages");

var exerciseImages = firstExercise.images;


function displayWorkout(workout) {
  choosenWorkoutEL.textContent = workout.name;

  if (exerciseImages.length < 1) {
    var exerciseCategory = workout.category.name;
    chosenWorkoutImagesEL.setAttribute(
      "src",
      (img = "./assets/images/workoutImages/" + exerciseCategory+".svg" )
    );
   
  } else {
    chosenWorkoutImagesEL.setAttribute("src", workout[0].image);
  }

  //if exercise images is falls = empty
  //if exercise images is not empty then we run it on the page
  //otherwise we put a discription or stock image or both
}

function nextWorkout() {
  if (currentWorkoutIndex > userWorkouts.length - 2) {
    currentWorkoutIndex = 0;
  } else {
    currentWorkoutIndex++;
  }

  displayWorkout(userWorkouts[currentWorkoutIndex])
}

displayWorkout(firstExercise);

nextWorkoutEl.addEventListener("click", nextWorkout);