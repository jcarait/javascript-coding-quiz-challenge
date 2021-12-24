//html elements
var introContainer = document.getElementsByClassName("intro-container");
var wrapper = document.getElementById("wrapper");
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
var displayhighScores = document.getElementById("display-high-scores")

//quiz completed elements

    var displayTotalScore
    var formEl
    var formLabel
    var formInput
    var buttonEl
    

// high score variables

var backBtn;
var clearBtn;
var playerData = [];
var highScores = [];
var player;

//function variables
var score = 0;
var timeLeft = 0;
var timePenalty = 0;
var delay = 3000;
var questionIndex = 0;
var isGameOver = false;
var quizCompleted;



// clears the intro at beginning of quiz
function clearIntro() {

    mainTitle.textContent = "";
    introText.textContent = "";

    if (startBtn.style.display === "none") {
        startBtn.style.display  = "block"
    } else {
        startBtn.style.display = "none"
    }
}

function restoreIntro() {
    mainTitle.textContent = "Coding Quiz Challenge";
    introText.textContent = "Try to answer the following code-related quiz within the time limit. Keep in mind that incorrect answers will penalise your timer by 5 seconds!";
    if (startBtn.style.display === "none") {
        startBtn.style.display  = "block"
    } else {
        startBtn.style.display = "none"
    }

    backBtn.remove();
    clearBtn.remove();
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
        choice.setAttribute("id", "choices");
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
            timeLeft = timeLeft-5;
        }
    }

    if (questionIndex === questions.length-1) {
        quizDone();
        isGameOver = true;

        //'correct!' or 'wrong!' message is displayed for 0.75 seconds
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


// countdown timer
function countdown() {
    timeLeft = 60;

    var timeInterval = setInterval(function () {

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
            quizDone();
            outOfTimeMsg();
        } else if (isGameOver && timeLeft > 0 ) {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
        } else {
            timerEl.textContent = timeLeft;
            timeLeft--; 
        }
    }, 1000);
}


// display message, score and form
function quizDone() {
    question.textContent = "";
    multipleChoice.innerHTML = "";

    quizCompleted = document.createElement("p");
    displayTotalScore = document.createElement("p");
    formEl = document.createElement("form");
    formLabel = document.createElement("label")
    formInput = document.createElement("input")
    buttonEl = document.createElement("button")

    quizCompleted.textContent = "All done!";
    displayTotalScore.textContent = "Your score is: " + score;
    formLabel.textContent = "Enter your initials: ";
    buttonEl.textContent = "Submit";
    
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "input-initials");
    formInput.attributes.required = "required";
    buttonEl.setAttribute("type", "button");
    buttonEl.setAttribute("id", "submit-initials");

    completeEl.appendChild(quizCompleted);
    completeEl.appendChild(displayTotalScore);
    completeEl.appendChild(formEl);
    formEl.appendChild(formLabel);
    formEl.appendChild(formInput);
    formEl.appendChild(buttonEl);

    formEl.addEventListener("submit", function(event) {
        event.preventDefault();
         
    })
    
    submit();  
  
};

//change message if player runs out of time
function outOfTimeMsg() {
    quizCompleted.textContent = "You ran out of time!";
};


startBtn.addEventListener("click", function () {
    clearIntro();
    renderQnA();
    countdown();
});


// save score to local storage and change to next page
function submit() {

    submitHighScore = document.getElementById("submit-initials");

    submitHighScore.addEventListener("click", function () {

        inputInitials = document.getElementById("input-initials");

        inputInitials.addEventListener("enter", function() {
            preventD
        })

        var playerSummary = {
            initials: inputInitials.value.trim(),
            score: score
        };
    
        localStorage.setItem("player", JSON.stringify (playerSummary));
        createHighScoreEls();
        renderHighScore();
   
});
}

function createHighScoreEls () {

    backBtn = document.createElement("button");
    clearBtn = document.createElement("button");

    backBtn.setAttribute("id", "back");
    clearBtn.setAttribute("id", "clear")

    backBtn.textContent = "Back";
    clearBtn.textContent = "Clear Highscores";

    wrapper.appendChild(backBtn);
    wrapper.appendChild(clearBtn);

    if (completeEl) {
        while (completeEl.firstChild) {
            completeEl.removeChild(completeEl.firstChild);
        }
    }

    
    backBtn.addEventListener("click", function () {
            
        displayhighScores = document.querySelector("ol");

    if (displayhighScores) {
        while (displayhighScores.firstChild) {
            displayhighScores.removeChild(displayhighScores.firstChild);
        }
    }
        
        restoreIntro();
    })

    clearBtn.addEventListener("click", function () {
            clearHighScores();
    })
}

function clearHighScores() {
    displayhighScores = document.querySelector("ol");

    if (displayhighScores) {
        while (displayhighScores.firstChild) {
            displayhighScores.removeChild(displayhighScores.firstChild);
        }
    }

    highScores = [];
    localStorage.clear();
}


function renderHighScore() {
   
    // || localStorage.getItem("player") !== null -- for later use if needed
    
    if (localStorage.getItem("highScores") !== null) {
        var storedScores = JSON.parse(localStorage.getItem("highScores"));
        var player = JSON.parse(localStorage.getItem("player"))
        highScores = storedScores;
        highScores.push(player);
        highScores.sort(function (a,b) {return b.score - a.score});

        for (var i = 0; i < highScores.length; i++) {
            var playerList = document.createElement("li")
            playerList.textContent = highScores[i].initials + " - " + highScores[i].score;
            displayhighScores.appendChild(playerList);
        }

        localStorage.setItem("highScores", JSON.stringify (highScores));
     


    }  else {

        var player = JSON.parse(localStorage.getItem("player"))
        playerData.push(player);
        highScores.push(player);
        console.log(highScores)

        for (var i = 0; i < playerData.length; i++) {
            var playerList = document.createElement("li")
            playerList.textContent = playerData[i].initials + " - " + playerData[i].score;
            displayhighScores.appendChild(playerList);
        }

        localStorage.setItem("highScores", JSON.stringify (highScores));
        
    }

}