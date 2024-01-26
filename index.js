let yourChoiceDisplay = document.getElementById("yourChoice");
let computerChoiceDisplay = document.getElementById("computerChoice");
let resultText = document.getElementById("resultText");
let buttons = document.querySelectorAll("button");
let userScore=document.getElementById("userScore");
let compScore=document.getElementById("compScore");
let userChoice;
let computerChoice;
let userScoreNo=0;
let compScoreNo=0;
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        userChoice = e.target.innerText;
        yourChoiceDisplay.innerHTML = userChoice;
        dropsound();
        genrateComputerChoice();
        colorChange();
        scoreBoard();
    })
})
function genrateComputerChoice() {
    let emoji = ["✋", "👊", "✌️"];
    let randomNumber = Math.floor(Math.random() * (buttons.length));
    computerChoice = emoji[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice;
    if(computerChoice===userChoice){
        resultText.innerHTML="Game Tie !!"
    }
    if (computerChoice === "✋" && userChoice === "👊") {

        resultText.innerHTML = "You Lost !";
        compScoreNo++;
    }
    if (computerChoice === "✋" && userChoice === "✌️") {

        resultText.innerHTML = "You Win !";
        userScoreNo++;
        winSound();
    }
    if (computerChoice === "👊" && userChoice === "✋") {

        resultText.innerHTML = "You Win !";
        winSound();
    }
    if (computerChoice === "👊" && userChoice === "✌️") {

        resultText.innerHTML = "You Lost !";
        compScoreNo++;
    }
    if (computerChoice === "✌️" && userChoice === "👊") {

        resultText.innerHTML = "You Win !";
        userScoreNo++;
        winSound();
    }
    if (computerChoice === "✌️" && userChoice === "✋") {

        resultText.innerHTML = "You Lost !";
        compScoreNo++;
    }


}

function dropsound(){
    let audio=new Audio("drop.mp3");
    audio.play();

}
function winSound(){
    let audio=new Audio("win.mp3");
    audio.play();
}
function colorChange(){
    if(resultText.innerHTML==="You Win !"){
        resultText.style.color="green";
    }
    else if(resultText.innerHTML==="You Lost !"){
        resultText.style.color="red";
    }
    else{
        resultText.style.color="black";
    }
}
function scoreBoard(){
   userScore.innerHTML=userScoreNo;
   compScore.innerHTML=compScoreNo;
}
