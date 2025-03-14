const target = document.getElementById('target');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game-area');

let timer = 10;
let score = 0;
let gameInterval;

function moveTarget() {
    const x = Math.random() * (gameArea.offsetWidth - target.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - target.offsetHeight);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function updateTimer() {
    timer--;
    timerDisplay.textContent = timer;

    if (timer <= 0) {
        clearInterval(gameInterval);
        alert(`Fim de jogo! Sua pontuação foi ${score}.`);
        target.style.display = 'none';
    }
}

function startGame() {
    timer = 10;
    score = 0;
    timerDisplay.textContent = timer;
    scoreDisplay.textContent = score;
    target.style.display = 'block';
    moveTarget();

    gameInterval = setInterval(updateTimer, 1000);
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

startGame();