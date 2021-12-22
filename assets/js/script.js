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


var introContainer = document.getElementsByClassName("intro-container");
var wrapper = document.getElementsByClassName("wrapper");
var highScores = document.getElementById("high-scores")
var countdownDisplay = document.getElementById("countdown");
var timer = document.getElementById("timer");
var mainTitle = document.getElementById("main-heading");
var introText = document.getElementById("intro");
var question = document.getElementById("question");
var startBtn = document.getElementById("start-btn");
var multiplChoice = document.getElementById("multiple-choice");

var score = 0;
var timeLeft = 0;
var timePenalty = 0;
var choseQuestion = "";
var element;


function clearIntro() {

    mainTitle.textContent = "";
    introText.textContent = "";
    startBtn.remove();
}

function renderQnA() {

    wrapper.innerHTML = "";

    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(chosenQuestion);
    question.textContent = chosenQuestion.question;
    questionsArray = chosenQuestion.choices;
    console.log(questionsArray)
    
    for (var i = 0; i < questionsArray.length; i++ ) {
        var choice = document.createElement("li");
        choice.innerHTML = questionsArray[i];
        multiplChoice.appendChild(choice);
    }
}

function checkAnswer() {
    var element = event.target;
    

    if (element.matches("li")) {

    if (chosenQuestion.answer == element.textContent) {
        console.log("Correct! The answer is: " + chosenQuestion.answer);
    } else {
        console.log("Wrong! The answer is: " + chosenQuestion.answer);
    }
  }
}

startBtn.addEventListener("click", function () {
    clearIntro();
    renderQnA();
    // initQuiz();
})

multiplChoice.addEventListener("click", (checkAnswer));

