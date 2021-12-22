var questions = [
    {
        question: "Which type of JavaScript language is ___",
        choices: [ "Object-Oriented", "Object-Based", "Assembly-language", "High-level" ],
        answer: "High-level"
    }, {
        question: "Which one of the following also known as Conditional Expression:",
        choices: [ "Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if" ],
        answer: "immediate if"
    }, {
        question: "In JavaScript, what is a block of statement?",
        choices: [ "Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement" ],
        answer: "block that combines a number of statements into a single compound statement"
    }, {
        question: "When interpreter encounters an empty statements, what it will do:",
        choices: [ "Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements" ],
        answer: "Ignores the statements"
    }, {
        question: "The 'function' and 'var' are known as:",
        choices: [ "Keywords", "Data types", "Declaration statements", "Prototypes" ],
        answer: "Declaration statements"
    }, {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        choices: [ "Global variable", "The local element", "The two of the above", "None of the above" ],
        answer: "The local element"
    }, {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        choices: [ "Preprocessor", "Triggering Event", "RMI", "Function/Method" ],
        answer: "Function/Method"
    }, {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        choices: [ "Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket" ],
        answer: "Division by zero"
    }, {
        question: "Which of the following given functions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        choices: [ "toExponential()", "toFixed()", "toPrecision()", "toLocaleString()" ],
        answer: "toPrecision()"
    }, {
        question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        choices: [ "slice()", "split()", "substr()", "search()" ],
        answer: "substr()"
    }]

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
}


//checks for answer
function checkAnswer(event) {
    var element = event.target;
    

    if (element.matches("li")) {

    if (questions[questionIndex].answer == element.textContent) {
        feedback.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
    } else {
        feedback.textContent = "Wrong! The answer is: " + questions[questionIndex].answer;
    }

  }
}



// event listeners
startBtn.addEventListener("click", function () {
    clearIntro();
    renderQnA();
    // initQuiz();
})

multipleChoice.addEventListener("click", (checkAnswer));


