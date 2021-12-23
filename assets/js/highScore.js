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

    displayhighScores = document.querySelector("ol");

    if (displayhighScores) {
        while (displayhighScores.firstChild) {
            displayhighScores.removeChild(displayhighScores.firstChild);
        }
    }

    highScores = [];
    localStorage.clear();
    playerList.remove();
    
})

renderHighScore();

function renderHighScore() {
   
    
    
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


    } else {

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