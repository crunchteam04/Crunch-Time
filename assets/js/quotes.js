var quotes = document.querySelector("#quote");
var author = document.querySelector("#author");
var getQuoteBtn = document.querySelector(".get-quote-btn")



fetch('https://type.fit/api/quotes')

  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    getQuote(data)
var callQuote = setInterval(() => {
    getQuote(data)
}, 10000);
// Reduced from 100,000 to 10,000 for demo

var timeLeft = JSON.parse(localStorage.getItem("userData"))
timeLeft = parseInt(timeLeft.userTime*60000)


setTimeout(() => {
    clearInterval(callQuote)
}, timeLeft);
// getQuoteBtn.addEventListener("click", function(){git add
    
// }) 

});

// var testObject = {
//     name: "Mike",
//     time: "10",
//     exercises: [],
// }
// localStorage.setItem("workout-data", JSON.stringify(testObject))

var getQuote = function (data){
   var randomIndex = Math.floor(Math.random()*data.length)
    quotes.textContent = data[randomIndex].text
    author.textContent = data[randomIndex].author
}