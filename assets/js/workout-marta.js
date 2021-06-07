//capture data from localstorage

var userPotato = JSON.parse(localStorage.getItem("userData"));
var choosenWorkoutEL = document.querySelector("#choosenWorkout");
var randomExercise = userPotato.chosenWorkout;

var chosenWorkoutImagesEL = document.querySelector("#chosenWorkoutImages");

var exerciseImages = randomExercise.images;

function displayRandomWorkout() {
  choosenWorkoutEL.textContent = randomExercise.name;

  if (exerciseImages.length < 1) {
    var exerciseCategory = randomExercise.category.name;
    chosenWorkoutImagesEL.setAttribute(
      "src",
      (img = "./assets/images/workoutImages/" + exerciseCategory+".svg" )
    );
   
  } else {
    chosenWorkoutImagesEL.setAttribute("src", exerciseImages[0].image);
  }

  //if exercise images is falls = empty
  //if exercise images is not empty then we run it on the page
  //otherwise we put a discription or stock image or both
}


displayRandomWorkout();
