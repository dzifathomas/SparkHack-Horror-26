if (localStorage.getItem("totalPoints") === null) {
    localStorage.setItem("totalPoints", "0");
}

let totalPoints = parseInt(localStorage.getItem("totalPoints"));
let choiceMade = false;


function makeChoice(points) {

    if (choiceMade) return;

    totalPoints += points;

    localStorage.setItem("totalPoints", totalPoints);

    choiceMade = true;

    console.log("Total points:", totalPoints);
}