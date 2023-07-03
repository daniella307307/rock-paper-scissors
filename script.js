function getComputerChoice() {
    const choices=['Rock','Paper','Scissors'];
    const randomIndex=Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Make the player's selection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Determine the winner
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  // Function to play a 5 round game
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Start the game
  game();
