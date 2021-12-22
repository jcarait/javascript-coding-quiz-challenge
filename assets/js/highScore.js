var submitHighScore = document.getElementById("submit-initials");
var inputInitials = document.querySelector("input");

function savePlayer () {
    var playerSummary = {
        playerInitials: inputInitials.value.trim(),
        playerScore: score
    }

    localStorage.setItem("player", JSON.stringify (playerSummary));
};



submitHighScore.addEventListener("click", function () {
    savePlayer();
});