var backBtn = document.getElementById("back");

backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

var player = [];

    inputInitials = document.getElementById("input-initials");

    var playerSummary = {
        initials: inputInitials.value.trim(),
        score: score
    };

    localStorage.setItem("player", JSON.stringify (playerSummary));
    displayPlayer();

function displayPlayer () {
    var player = JSON.parse(localStorage.getItem("player"));

    console.log(player);

    for (var i = 0; i < player.length; i++ ) {
        var playerList = document.createElement("li")
        playerList.textContent = player[i].initials + "-" + player[i].score;
        displayhighScores.appendChild(playerList);
    }

}




