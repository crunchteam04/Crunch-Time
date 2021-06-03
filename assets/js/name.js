var nextEl = document.getElementById("nextBtn");
var inputEl = document.querySelector(".validate");

console.log(nextEl);
nextEl.addEventListener("click", function(event){
    // Gets input value
    var name = inputEl.value;
    var userData = { userName: `${name}` };
    console.log(name);
    // Saves data to storage
    localStorage.setItem("userData", 
    // converts array to string
    JSON.stringify(userData));
});

function retrieveObj() {
    // Retrieve the object from storage
    var getObject = localStorage.getItem('userData');
    
    // converts string back to array
    return JSON.parse(getObject);
}

retrieveObj();