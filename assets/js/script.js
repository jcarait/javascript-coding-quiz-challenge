questions = [
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }, {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
    }]


var introContainer = document.getElementsByClassName("intro-container");
var introContainer = document.getElementsByClassName("wrapper");
var highScores = document.getElementById("high-scores")
var countdownDisplay = document.getElementById("countdown");
var timer = document.getElementById("timer");
var introText = document.getElementById("intro");
var question = document.getElementById("question");
var startBtn = document.getElementById("start-btn");
var multiplChoice = document.getElementById("multiple-choice");

function clearIntro() {

    title.textContent = "";
    introText.textContent = "";
    startBtn.remove();

}

function initQuiz() {

}


var timeLeft = 0;
var timePenalty = 0;
var score = 0;



startBtn.addEventListener("click", function () {
    clearIntro();
    initQuiz();
})
