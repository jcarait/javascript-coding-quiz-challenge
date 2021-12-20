var highScores
var countdownDisplay = document.getElementById("countdown");
var timer = document.getElementById("timer");
var introContainer = document.getElementsByClassName("intro-container");
var question = document.getElementById("question");
var startBtn = document.getElementById("start-btn");

// function init() {
//     getHighScore();
// }



startBtn.addEventListener("click", function() {
    introContainer.innerHTML = "";
} )


var timeLeft = 0;
var timePenalty = 0;
var score = 0;

