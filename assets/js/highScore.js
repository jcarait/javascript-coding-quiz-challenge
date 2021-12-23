var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var displayhighScores = document.getElementById("display-high-scores")

backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

var playerData = [];

var storedHighScores = JSON.parse(localStorage.getItem("highScores"))

if (storedHighScores !== null) {
    var player = JSON.parse(localStorage.getItem("player"));

    playerData.push(player);



    console.log(playerData.length);

displayScores(playerData)
localStorage.setItem("highScores", JSON.stringify(playerData));
    
} else {
    displayScores(storedHighScores);
    saveHighScores();
}



function saveHighScores() {
    
    localStorage.setItem("highScores", JSON.stringify(storedHighScores));
};

function displayScores(storedData) {
    for (var i = 0; i < storedData.length; i++) {
        var playerList = document.createElement("li")
        playerList.textContent = storedData[i].initials + " - " + storedData[i].score;
        displayhighScores.appendChild(playerList);
    }
}



