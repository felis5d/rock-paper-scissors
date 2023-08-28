function setCounters() {
    setComputerCounter();
    setPlayerCounter();
}

function setComputerCounter() {
    document.getElementById("computer-counter").innerHTML = 0;
}

function getComputerCounter() {
    return parseInt(document.getElementById("computer-counter").innerHTML);
}

function setPlayerCounter() {
    document.getElementById("player-counter").innerHTML = 0;
}

function getPlayerCounter() {
    return parseInt(document.getElementById("player-counter").innerHTML);
}

function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

//cc=0,1,2
//cc<1 rock
//cc>1 paper
//cc==1 scissors

function rock() {
    let computerChoice = getComputerChoice();
    document.getElementById("player-choice").innerHTML = "Rock";
    if (computerChoice<1) {
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("computer-choice").innerHTML = "Rock";
    } else if (computerChoice>1) {
        document.getElementById("result").innerHTML = "Computer wins!";
        document.getElementById("computer-choice").innerHTML = "Paper";
        document.getElementById("computer-counter").innerHTML = getComputerCounter()+1;
    } else {
        document.getElementById("result").innerHTML = "You win!";
        document.getElementById("computer-choice").innerHTML = "Scissors";
        document.getElementById("player-counter").innerHTML = getPlayerCounter()+1;
    }
}

function paper() {
    let computerChoice = getComputerChoice();
    document.getElementById("player-choice").innerHTML = "Paper";
    if (computerChoice<1) {
        document.getElementById("result").innerHTML = "You win!";
        document.getElementById("computer-choice").innerHTML = "Rock";
        document.getElementById("player-counter").innerHTML = getPlayerCounter()+1;
    } else if (computerChoice>1) {
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("computer-choice").innerHTML = "Paper";
    } else {
        document.getElementById("result").innerHTML = "Computer wins!";
        document.getElementById("computer-choice").innerHTML = "Scissors";
        document.getElementById("computer-counter").innerHTML = getComputerCounter()+1;
    }
}

function scissors() {
    let computerChoice = getComputerChoice();
    document.getElementById("player-choice").innerHTML = "Scissors";
    if (computerChoice<1) {
        document.getElementById("result").innerHTML = "Computer wins!";
        document.getElementById("computer-choice").innerHTML = "Rock";
        document.getElementById("computer-counter").innerHTML = getComputerCounter()+1;
    } else if (computerChoice>1) {
        document.getElementById("result").innerHTML = "You win!";
        document.getElementById("computer-choice").innerHTML = "Paper";
        document.getElementById("player-counter").innerHTML = getPlayerCounter()+1;
    } else {
        document.getElementById("result").innerHTML = "It's a tie!";
        document.getElementById("computer-choice").innerHTML = "Scissors";
    }
}
