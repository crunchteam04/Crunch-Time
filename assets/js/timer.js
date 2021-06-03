const progressBarEl = document.querySelector(".determinate");
let userData = {};

// Grabs user data from local storage, making sure that the user data isn't empty. If it is, we should redirect back to the first page so the user can input their information!
const importUserData = function() {
    const data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
        userData = data;
    } else {
        window.location.href = "./index.html";
    }
};

// Starts the timer. This uses a percentage system of whatever the user inputs, to be portrayed on the progress bar as an increasing value over time
const startTimer = function() {
    const startTime = userData.userTime / 30;
    let timer = 0;

    const progressDown = setInterval(function() {
        // We convert the timer to a percentage
        const barPercentage = (timer / startTime) * 100;
        progressBarEl.setAttribute("style", `width: ${barPercentage}%`)
        // If the bar has filled up, end the count and move to the next page.
        if (timer > startTime) {
            clearInterval(progressDown);
            window.location.href = "./history.html";
        }
        // The below two values are interlinked; the timer has to increment at the same rate that the interval triggers, so that the count stays in line with real-world seconds. If you want this to run faster (so that the bar moves smoother), make the timer increase at smaller increments. E.g., if you change setInterval() to work every 500 milliseconds, set the timer to increase by 0.5.
        timer++;
    }, 1000);
};

importUserData();
startTimer();