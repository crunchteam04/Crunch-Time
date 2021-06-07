var tableData = document.querySelector(".td");
var tableTime = document.querySelector(".ttime");
var userNameInput = document.querySelector(".userNameInput")
var getWorkout = [];
// Retrieve the object from storage and converts string to array
var userData = JSON.parse(localStorage.getItem('userData'));


function retrieveName(){
    var nameContainer = JSON.parse(localStorage.getItem("nameContainer"));
    if (nameContainer === null ){
        nameContainer = [];
    }
    
    if (Object.keys(userData).length > 0 ){
        nameContainer.push(userData.userName);
    }

    // for loop to print to page
    for (i = 0; i < nameContainer.length; i++ ) {
        var para = document.createElement("p");
        para.textContent = nameContainer[i];
        userNameInput.appendChild(para);
    }
    
    localStorage.setItem("nameContainer", JSON.stringify(nameContainer));
}
retrieveName();

function retrieveWorkout() {
    var workoutContainer = JSON.parse(localStorage.getItem("workoutContainer"));
    // workout array from local storage, if its empty, I'll make a new one
    if (workoutContainer === null ){
        workoutContainer = [];
    }
    
    if (Object.keys(userData).length > 0 ){
        // getting the name and push it to workoutContainer
        workoutContainer.push(userData.chosenWorkout.name);
    }
    // for loop to print to page
    for (i = 0; i < workoutContainer.length; i++ ) {
        var para = document.createElement("p");
        para.textContent = workoutContainer[i];
        tableData.appendChild(para);
    }
    // save to workoutContainer to workoutContainer
    localStorage.setItem("workoutContainer", JSON.stringify(workoutContainer));
}
retrieveWorkout();

function retrieveTime(){
    var timeContainer = JSON.parse(localStorage.getItem("timeContainer"));
    if (timeContainer === null ){
        timeContainer = [];
    }

    if (Object.keys(userData).length > 0 ){
        timeContainer.push(userData.userTime);
    }

    
    for (i = 0; i < timeContainer.length; i++ ) {
        var para = document.createElement("p");
        para.textContent = timeContainer[i]/60 + " minutes";
        tableTime.appendChild(para);
    }

    localStorage.setItem("timeContainer", JSON.stringify(timeContainer));
}
retrieveTime();


localStorage.setItem("userData", JSON.stringify({}));