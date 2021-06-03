var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var rightArrow = document.getElementById("rightArrow");
var userData = {};

var loadUserData = function() {
    var data = JSON.parse(localStorage.getItem("userData"));

    if (data) {
        userData = data;
    }
};

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
    userData.userTime = output.textContent*60; 
}

rightArrow.addEventListener("click", function(){
    localStorage.setItem("userData", JSON.stringify(userData));
})


loadUserData();