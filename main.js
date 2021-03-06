const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn,paperBtn,scissorBtn];
    const computerOptions = ['rock','paper','scissors']
}         
    playerOptions.forEach(option => {
    option.addEventListener('click',function(){
if(playerScore > computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Won The Game';
}
else if(playerScore < computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Lost The Game';
}
else{
    result.style.fontSize = '2rem';
    result.innerText = 'Tie';
}

    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click',() => {
    window.location.reload();
})
winner(this.innerText,computerChoice);
const winner = (player,computer) => {
const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
player = player.toLowerCase();
computer = computer.toLowerCase();
    
if(player === computer){
result.textContent = 'Tie';
}
else if(player == 'rock'){
if(computer == 'paper'){
    result.textContent = 'You Lose';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
 
}else{
    result.textContent = 'You Won';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
}
}
else if(player == 'scissors'){
if(computer == 'rock'){
    result.textContent = 'You Lose';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
}else{
    result.textContent = 'You Won';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
 }
}
else if(player == 'paper'){
    if(computer == 'scissors'){
    result.textContent = 'You Lose';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
}else{
    result.textContent = 'You Won';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
}
}
}
const gameOver = (playerOptions,movesLeft) => {
const chooseMove = document.querySelector('.move');
const result = document.querySelector('.result');
const reloadBtn = document.querySelector('.reload');
 playerOptions.forEach(option => {
    option.style.display = 'none';
})
reloadBtn.innerText = 'Restart';
reloadBtn.style.display = 'flex'
reloadBtn.addEventListener('click',() => {
    window.location.reload();
})
}
playGame(); 
}
game());
