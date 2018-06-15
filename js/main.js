// rock paper scissors game
// user selects rock
// user selects paper
// user selects scissors
// dom determines rock, paper scissors
// show if user won on document
// show wins on score board on documant

var botScore=0,
    playerScore=0;
//event listener for rock
document.getElementById("rock").onclick=playerThrowsRock;
//event listener for paper
document.getElementById("paper").onclick=playerThrowsPaper;
//event listener for scissors
document.getElementById("scissors").onclick=playerThrowsScissors;
//event listener for Spock
document.getElementById("lizard").onclick=playerThrowsLizard;
//event listener for lizard
document.getElementById("spock").onclick=playerThrowsSpock;
//function for rock
function playerThrowsRock(){
    var botsWeapon=getRandomWeapon();
    checkWhoWon(botsWeapon,"rock");
    displayUserSelectionMessage("You chose Rock!");
    displayBotsWeaponMessage(`Computer chose ${botsWeapon}.`);

}
//function for scissors
function playerThrowsScissors(){
    var botsWeapon=getRandomWeapon();
    checkWhoWon(botsWeapon,"scissors");
    displayUserSelectionMessage("You chose Scissors!");
    displayBotsWeaponMessage(`Computer chose ${botsWeapon}.`);
}
//function for paper
function playerThrowsPaper(){
    var botsWeapon=getRandomWeapon();
    checkWhoWon(botsWeapon,"paper");
    displayUserSelectionMessage("You chose Paper!");
    displayBotsWeaponMessage(`Computer chose ${botsWeapon}.`);
}
//function for paper
function playerThrowsLizard(){
    var botsWeapon=getRandomWeapon();
    checkWhoWon(botsWeapon,"lizard");
    displayUserSelectionMessage("You chose Lizard!");
    displayBotsWeaponMessage(`Computer chose ${botsWeapon}.`);
}
//function for paper
function playerThrowsSpock(){
    var botsWeapon=getRandomWeapon();
    checkWhoWon(botsWeapon,"spock");
    displayUserSelectionMessage("You chose Spock!")
    displayBotsWeaponMessage(`Computer chose ${botsWeapon}.`)
}
//function for random bot weapon
function getRandomWeapon(){
    var randomNumber=Math.random();
    var botsWeapon="rock";
    if(randomNumber>=.1<.2){
        botsWeapon="scissors";
    }
    else if(randomNumber>=.4<.6){
        botsWeapon="paper";
    }
    else if(randomNumber>=.6<.8){
        botsWeapon="lizard";
    }
    else if(randomNumber>=.8){
        botsWeapon="spock";
    }
    return botsWeapon;
}
//function for
function checkWhoWon(botsWeapon,playersWeapon){
    if(botsWeapon==playersWeapon){
        displayCompleteMessage("There was tie");
    }
    else if(
        (botsWeapon=="rock" && playersWeapon=="scissors") ||
        (botsWeapon=="rock" && playersWeapon=="spock") ||
        (botsWeapon=="paper" && playersWeapon=="rock") ||
        (botsWeapon=="paper" && playersWeapon=="spock") ||
        (botsWeapon=="scissors" && playersWeapon=="paper") ||
        (botsWeapon=="scissors" && playersWeapon=="lizard") ||
        (botsWeapon=="lizard" && playersWeapon=="spock") ||
        (botsWeapon=="lizard" && playersWeapon=="paper") ||
        (botsWeapon=="spock" && playersWeapon=="rock") ||
        (botsWeapon=="spock" && playersWeapon=="scissors")
    ){
        increaseBotScore();
    }
    else{
        increasePlayerScore();
    }
}
//track scores
function increaseBotScore(){
    botScore+=1;
    document.getElementById("computerScore").innerHTML=botScore;
    displayCompleteMessage("Sorry, you're a loser");
}
//track user score
function increasePlayerScore(){
    playerScore+=1;
    document.getElementById("humanScore").innerHTML=playerScore;
    displayCompleteMessage("You're a weiner!");
}
//return result
function displayCompleteMessage(msg){
    document.getElementById("status").innerHTML=msg;
}
function displayUserSelectionMessage(msg){
    document.getElementById("userSelection").innerHTML=msg;
}
displayBotsWeaponMessage
function displayBotsWeaponMessage(msg){
    document.getElementById("botsSelection").innerHTML=msg;
}
