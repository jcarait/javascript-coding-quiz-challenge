var player = [];

function savePlayer () {
    inputInitials = document.getElementById("input-initials");

    var playerSummary = {
        playerInitials: inputInitials.value.trim(),
        playerScore: score
    };

    localStorage.setItem("player", JSON.stringify (playerSummary));
    displayPlayer();
};

function displayPlayer () {
    var player = JSON.parse(localStorage.getItem("player"));

    console.log(player);

    for (var i = 0; i < player.length; i++ ) {
        var playerList = document.createElement("li")
        playerList.innerHTML = trest;
        displayhighScores.appendChild(playerList);
    }

}


function submit() {

    submitHighScore = document.getElementById("submit-initials");

    submitHighScore.addEventListener("click", function () {
    savePlayer();
   
});
}

