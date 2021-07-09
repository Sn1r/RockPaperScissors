var options = ['Rock', 'Paper', 'Scissors'];
var computerChoice = Math.floor(Math.random() * options.length);

function gameOn(myHand) {
    var playerScore = document.getElementById('playerScore');
    var computerScore = document.getElementById('computerScore');
    // Random choice from an array
    var computerHandIndex = parseInt(Math.random() * options.length);
    var computerHand = options[computerHandIndex];
    
    // Options for Player to lose
    if (myHand === "Rock" && computerHand) {
        var computerScoreUpdate = parseInt(computerScore.textContent) + 1;
        document.getElementById('computerScore').innerHTML = computerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="pbr.png"> (Paper beats Rock, win for Computer)'
    }
    else if (myHand === "Paper" && computerHand === "Scissors") {
        var computerScoreUpdate = parseInt(computerScore.textContent) + 1;
        document.getElementById('computerScore').innerHTML = computerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="sbp.png"> (Scissors beats Paper, win for Computer)'
    }
    else if (myHand === "Scissors" && computerHand === "Rock") {
        var computerScoreUpdate = parseInt(computerScore.textContent) + 1;
        document.getElementById('computerScore').innerHTML = computerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="rbs.png"> (Rock beats Scissors, win for Computer)'
    }

    // Options for player to win
    else if (myHand === "Paper" && computerHand === "Rock") {
        var playerScoreUpdate = parseInt(playerScore.textContent) + 1;
        document.getElementById('playerScore').innerHTML = playerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="pbr.png"> (Paper beats Rock, win for Player)'
    }
    else if (myHand === "Rock" && computerHand === "Scissors") {
        var playerScoreUpdate = parseInt(playerScore.textContent) + 1;
        document.getElementById('playerScore').innerHTML = playerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="rbs.png"> (Rock beats Scissors, win for Player)'
    }
    else if (myHand == "Scissors" && computerHand === "Paper") {
        var playerScoreUpdate = parseInt(playerScore.textContent) + 1;
        document.getElementById('playerScore').innerHTML = playerScoreUpdate;
        document.getElementById('gameon').innerHTML = '<img src="sbp.png"> (Scissors beats Paper, win for Player)'
    }

    // If it's a tie
    else {
        document.getElementById('gameon').innerHTML = '<img src="https://media.tenor.com/images/c51d80c0a35399d72c37058bce88d02c/tenor.gif">'
    }
    // If 5 Wins were made so a modal will pop and after 1.5 seconds the game will restart
    if (computerScoreUpdate == 5) {
        swal("You Lose", "Restarting the game", "error");
        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
          }
          sleep(1500).then(() => {
              location.reload();
        });     
    }
     // If 5 Loses were made so a modal will pop up and after 1.5 seconds the game will restart   
    else if (playerScoreUpdate == 5) {
        swal("You win!", "Restrating the game", "success");
        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
          }
          sleep(1500).then(() => {
              location.reload();
        });  
    }   
}
