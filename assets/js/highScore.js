var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var displayhighScores = document.getElementById("display-high-scores")

var playerData = [];
var highScores = [];
var player;


backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

clearBtn.addEventListener("click", function () {

    playerList = document.querySelector("li");
    playerData = [];
    highScores = [];
    playerList.remove();    
    localStorage.clear();
})


displayHighScores();
saveHighScores();

function displayHighScores() {
    var player = JSON.parse(localStorage.getItem("player"));

    playerData.push(player);
    highScores.push(playerData);

    console.log(playerData.length);

    for (var i = 0; i < playerData.length; i++) {
        var playerList = document.createElement("li")
        playerList.textContent = playerData[i].initials + " - " + playerData[i].score;
        displayhighScores.appendChild(playerList);
    };

};

function saveHighScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function getHighScores () {
    var storedHighScores = localStorage.getItem("highScores");
    console.log(storedHighScores);
        if (storedHighScores == null) {
            return false;
        }

        storedHighScores = JSON.parse(storedHighScores);
        console.log(storedHighScores);

        for (var i = 0; i < storedHighScores.length; i++) {
            var playerList = document.createElement("li")
            playerList.textContent = storedHighScores[i].initials + " - " + storedHighScores[i].score;
            displayhighScores.appendChild(playerList);

            highScores.push(storedHighScores[i]);
            console.log(highScores)
        };
}







getHighScores();