// The spans containing the values for each muscle group
const chestValEl = document.querySelector("#chest");
const backValEl = document.querySelector("#back");
const shouldersValEl = document.querySelector("#shoulders");
const absValEl = document.querySelector("#abs");
const armsValEl = document.querySelector("#arms");
const legsValEl = document.querySelector("#legs");
// The next page arrow
const nextPageEl = document.querySelector("#nextPage");

// The API stuff. The key, the input from the user, the language to draw from, etc.
const apiUrl = "https://wger.de/api/v2/exerciseinfo?";

const english = "language=2"

let userData = {};

// Grabs the user data from local storage, to update it
const importUserData = function() {
    const data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
        userData = data;
    }
};

// Get the data from wger
const getExerciseData = function() {
    // This is the length of the wger API's english-language list of exercises, minus 20. Hard-coding it because it's inefficient to call it to see the length and then call it again; we can change this later if it proves unwieldy. By subtracting 20, I get a value between 0 and 209, so I always get the max of 20 items in the response. In any case, it's used to create a random position within the total 
    const countLength = 209;
    const randomOffest = "&offset=" + Math.floor(Math.random() * countLength);
    // Here's the fetch, with the url cobbled together from input and base values
    fetch(apiUrl + english + randomOffest)
        .then(function(response) {
            // If the response is good,
            if (response.ok) {
                // Turn it to JSON we can read
                response.json()
                    .then(function(data) {
                        // Now we choose which exercise.
 
                        chooseExercise(data);
                    });
            }
        });
};

const chooseExercise = function(data) {
    // Now, we pick one of the workouts from the list, provided it meets the requirements that the user provided.

    const musclesObj = {
        chest: chestValEl.textContent,
        back: backValEl.textContent,
        shoulders: shouldersValEl.textContent,
        abs: absValEl.textContent,
        arms: armsValEl.textContent,
        legs: legsValEl.textContent
    }

    // Then, we create an array of the user values;
    const musclesArr = Object.values(musclesObj);

    const weightedArr = [];
    // Then, we put them in an array that is weighted based on the numbers provided for each value
    musclesArr.forEach((muscle, index) => {
        const muscleNames = Object.keys(musclesObj);

        for (let i = 0; i < muscle; i++) {
            weightedArr.push(muscleNames[index]);
        } 
    });
    // Then, we randomly pick one item from the array. This means that while there's a chance someone gets a workout they weighted against, they are far likely to get a workout for which they did weight. And any muscle they set to 0 is not on the list. The chosen muscle is what we compare against the API data, to find a workout
    const weightedRandom = Math.floor(Math.random() * weightedArr.length);
    const chosenMuscle = weightedArr[weightedRandom];

    // Now that we have our muscle, we can search the data for an exercise that meets the prerequisite
    let chosenWorkout = {};

    for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].category.name.toLowerCase() === chosenMuscle) {
            chosenWorkout = data.results[i];
            break;
        }
    }
    // If chosenWorkout somehow is still empty (e.g., none of the exercises it pulled happen to be of the target muscle group), we do it aaaaall again...
    if (!Object.entries(chosenWorkout).length) {
        makeInputData();
        return;
    }
    // Finally, we store the information in local storage, to be accessed on the next page. We make sure it's all in one neat package
    userData.chosenWorkout = chosenWorkout;
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "counter.html";
};

const makeInputData = function() {
    // Then we get the data for the exercise
    getExerciseData();
};

// Increases the value of the muscle group when it is clicked, or cycles it back to 0 if it reaches the maximum
const incrementVal = function(event) {
    // Capture the clicked element
    const targetEl = event.target;
    // Then capture its value
    let targVal = targetEl.textContent;
    // Then increment that value, or reduce to 0 if already at max
    if (targVal > 5) {
        targVal = 0;
    } else {
        targVal++;
    }
    // Then push to the page
    targetEl.textContent = targVal;
}

importUserData();

// All the click events for the muscle number values
chestValEl.addEventListener("click", incrementVal);
backValEl.addEventListener("click", incrementVal);
shouldersValEl.addEventListener("click", incrementVal);
absValEl.addEventListener("click", incrementVal);
armsValEl.addEventListener("click", incrementVal);
legsValEl.addEventListener("click", incrementVal);
// The click event for leaving the page; which is where all the magic happens
nextPageEl.addEventListener("click", makeInputData);