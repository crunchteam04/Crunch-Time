var nextEl = document.querySelector(".nextBtn");
var inputEl = document.querySelector(".validate");

nextEl.addEventListener("click", function(){
    // Gets input value
    var name = inputEl.value;
    var userData = { userName: `${name}` };

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