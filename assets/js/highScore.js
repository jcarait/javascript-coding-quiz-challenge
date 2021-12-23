var backBtn = document.getElementById("back");
var displayhighScores = document.getElementById("display-high-scores")

backBtn.addEventListener("click", function () {
    window.location.replace("./index.html");
})

var playerData = [];   

    var player = JSON.parse(localStorage.getItem("player"));

    playerData.push(player);

 

    console.log(playerData.length);


    for (var i = 0; i < playerData.length; i++ ) {
       var playerList = document.createElement("li")
    playerList.textContent = playerData[i].initials + " - " + playerData[i].score; 
    displayhighScores.appendChild(playerList);
    }




