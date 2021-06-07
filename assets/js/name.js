var nextEl = document.querySelector(".nextBtn");
var inputEl = document.querySelector(".validate");
var name = document.getElementById("userInput");
var form = document.getElementById("form");
// var error = document.getElementById("error")



nextEl.addEventListener("click", function(event){
    
    if (inputEl.value === ''){
        event.preventDefault()
        
        if (!document.querySelector("#message")){
        var error = document.getElementById('error')
        var errorMessage = document.createElement('p')
        errorMessage.textContent = 'Name is Required'
        errorMessage.setAttribute('id', 'message')
        error.appendChild(errorMessage)
        
        }return false;
        
    } else {
        var name = inputEl.value;
        var userData = { userName: `${name}` };
        // Saves data to storage
        localStorage.setItem("userData", 
        // converts array to string
        JSON.stringify(userData));
    }
})






// nextEl.addEventListener("click", function(){
//     // Gets input value
//     var name = inputEl.value;
//     var userData = { userName: `${name}` };
//     // Saves data to storage
//     localStorage.setItem("userData", 
//     // converts array to string
//     JSON.stringify(userData));
// });

function retrieveObj() {
    // Retrieve the object from storage
    var getObject = localStorage.getItem('userData');
    
    // converts string back to array
    return JSON.parse(getObject);
}

retrieveObj();