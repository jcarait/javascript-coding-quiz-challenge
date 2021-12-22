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
    var storedPlayer = JSON.parse(localStorage.getItem("player"))

    for (var i = 0; )

}


function submit() {

submitHighScore = document.getElementById("submit-initials");

submitHighScore.addEventListener("click", function () {
    savePlayer();
});
}

