//All html element variables
var introContainer = document.getElementsByClassName("intro-container");
var wrapper = document.getElementsByClassName("wrapper");
var highScores = document.getElementById("high-scores")
var countdownDisplay = document.getElementById("countdown");
var timer = document.getElementById("timer");
var mainTitle = document.getElementById("main-heading");
var introText = document.getElementById("intro");
var question = document.getElementById("question");
var startBtn = document.getElementById("start-btn");
var multipleChoice = document.getElementById("multiple-choice");
var feedback = document.getElementById("message");

// score and timer variables
var score = 0;
var timeLeft = 0;
var timePenalty = 0;
var delay = 3000;


var questionIndex = 0;

// clears the intro at beginning of quiz
function clearIntro() {

    mainTitle.textContent = "";
    introText.textContent = "";
    startBtn.remove();
}

// Questions and multiple choice answers appear on page
function renderQnA() {

    question.textContent = "";
    multipleChoice.innerHTML = "";
    
    var currentQuestion = questions[questionIndex];

    
    question.textContent = currentQuestion.question;
 

    var questionsArray = currentQuestion.choices;
    
    for (var i = 0; i < questionsArray.length; i++ ) {
        var choice = document.createElement("li");
        choice.innerHTML = questionsArray[i];
        multipleChoice.appendChild(choice); 
    }  
    multipleChoice.addEventListener("click", (checkAnswer));
}


//checks for answer
function checkAnswer(event) {
    var element = event.target;
    

    if (element.matches("li")) {

    if (questions[questionIndex].answer == element.textContent) {
        feedback.textContent = "Correct!";
        score = score+100;
    } else {
        feedback.textContent = "Wrong!";
    }
  }
  questionIndex++;
  renderQnA();
  console.log(score);
  

  setTimeout(function () {
      feedback.textContent = "";
  }, 750)

};





// event listeners
startBtn.addEventListener("click", function () {
    clearIntro();
    renderQnA();
    // initQuiz();
});




