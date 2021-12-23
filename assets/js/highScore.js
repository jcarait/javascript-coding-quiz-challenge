var backBtn = document.getElementById("back");

backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

var player = [];

    var player = JSON.parse(localStorage.getItem("player"));

    console.log(player);

    for (var i = 0; i < player.length; i++ ) {
        var playerList = document.createElement("li")
        playerList.textContent = player[i].initials + "-" + player[i].score;
        displayhighScores.appendChild(playerList);
    }




