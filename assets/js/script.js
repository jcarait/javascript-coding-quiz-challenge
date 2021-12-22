//All html element variables
var introContainer = document.getElementsByClassName("intro-container");
var wrapper = document.getElementsByClassName("wrapper");
var completeEl = document.getElementById("quiz-done");
var highScores = document.getElementById("high-scores")
var countdownDisplay = document.getElementById("countdown");
var timerEl = document.getElementById("timer");
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
var isGameOver = false;

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

    for (var i = 0; i < questionsArray.length; i++) {
        var choice = document.createElement("li");
        choice.innerHTML = questionsArray[i];
        multipleChoice.appendChild(choice);
    }
    multipleChoice.addEventListener("click", (checkAnswer));
}


//checks for answer and generates next question
function checkAnswer(event) {
    var element = event.target;


    if (element.matches("li")) {

        if (questions[questionIndex].answer == element.textContent) {
            feedback.textContent = "Correct!";
            score = score + 100;
        } else {
            feedback.textContent = "Wrong!";
            timeLeft = timeLeft - 5;
        }
    }

    if (questionIndex === questions.length-1) {
        quizDone();

        setTimeout(function () {
            feedback.textContent = "";
        }, 750)
    } else {
        questionIndex++;
        renderQnA();
        console.log(score);


        setTimeout(function () {
            feedback.textContent = "";
        }, 750)
    }
};


// game timer
function countdown() {
    timeLeft = 60;

    var timeInterval = setInterval(function () {

        

        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else if (isGameOver && timeLeft > 0 ) {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
        } else {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
            quizDone();
        }
    }, 1000);
}

function quizDone() {
    question.textContent = "";
    multipleChoice.innerHTML = "";

    var quizCompleted = document.createElement("p");
    var totalScore = document.createElement("p");
    var formEl = document.createElement("form");
    var formLabel = document.createElement("label")
    var formInput = document.createElement("input")
    var buttonEl = document.createElement("button")

    quizCompleted.textContent = "All done!";
    totalScore.textContent = "Your score is: " + score;
    formLabel.textContent = "Enter your initials: ";
    buttonEl.textContent = "Submit";
    
    formInput.setAttribute("type", "text");
    buttonEl.setAttribute("type", "button");


    completeEl.appendChild(quizCompleted);
    completeEl.appendChild(totalScore);
    completeEl.appendChild(formEl);
    formEl.appendChild(formLabel);
    formEl.appendChild(formInput);
    formEl.appendChild(buttonEl);
};







// event listeners
startBtn.addEventListener("click", function () {
    clearIntro();
    renderQnA();
    countdown();
});





