var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var displayhighScores = document.getElementById("display-high-scores")

var playerList;

backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

clearBtn.addEventListener("click", function () {
    playerData = [];
    storedHighScores = [];
    playerList.textContent = ""
    localStorage.clear();
})

var playerData = [];
var highScores = [];

var storedHighScores = JSON.parse(localStorage.getItem("highScores"))

    var player = JSON.parse(localStorage.getItem("player"));

    playerData.push(player);



    console.log(playerData.length);

    for (var i = 0; i < playerData.length; i++) {
        var playerList = document.createElement("li")
        playerList.textContent = playerData[i].initials + " - " + playerData[i].score;
        displayhighScores.appendChild(playerList);
    }

    highScores.push(playerData);
    
    if (!storedHighScores) {
    
    for (var i = 0; i < storedHighScores.length; i++) {
        var playerList = document.createElement("li")
        playerList.textContent = storedHighScores[i].initials + " - " + storedHighScores[i].score;
        displayhighScores.appendChild(playerList);
    }

    highScores.push(storedHighScores)

    }


function saveHighScores() {
    
    localStorage.setItem("highScores", JSON.stringify(storedHighScores));
};

function displayScores(storedData) {
    
}



