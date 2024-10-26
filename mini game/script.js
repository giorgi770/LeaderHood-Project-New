const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");
let speed = 5; // Player speed
let positionX = window.innerWidth / 2 - 25;
let obstacles = [];
let speedBoosts = [];
let score = 0;
let mousePositionX = positionX;

// Update player's position based on mouse movement
gameArea.addEventListener("mousemove", (e) => {
    mousePositionX = e.clientX - 25;
});

// Create obstacles
function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.left = `${Math.random() * (window.innerWidth - 40)}px`;
    gameArea.appendChild(obstacle);
    obstacles.push(obstacle);
}

// Create speed boosts
function createSpeedBoost() {
    const boost = document.createElement("div");
    boost.classList.add("speed-boost");
    boost.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    gameArea.appendChild(boost);
    speedBoosts.push(boost);
}

// Move obstacles
function moveObstacles() {
    obstacles.forEach((obstacle, index) => {
        let top = parseInt(obstacle.style.top || "-50px");
        top += speed;
        obstacle.style.top = `${top}px`;
        // Check collision with player
        if (top > window.innerHeight - 150 &&
            parseInt(obstacle.style.left) > positionX - 40 &&
            parseInt(obstacle.style.left) < positionX + 50) {
            alert("Game Over! Your score: " + score);
            resetGame();
        }
        // Remove obstacle if out of screen
        if (top > window.innerHeight) {
            gameArea.removeChild(obstacle);
            obstacles.splice(index, 1);
            score += 1;
            updateScore();
        }
    });
}

// Move speed boosts
function moveSpeedBoosts() {
    speedBoosts.forEach((boost, index) => {
        let top = parseInt(boost.style.top || "-50px");
        top += speed;
        boost.style.top = `${top}px`;
        // Check collision with player
        if (top > window.innerHeight - 150 &&
            parseInt(boost.style.left) > positionX - 30 &&
            parseInt(boost.style.left) < positionX + 50) {
            speed += 2;
            gameArea.removeChild(boost);
            speedBoosts.splice(index, 1);
        }
        // Remove boost if out of screen
        if (top > window.innerHeight) {
            gameArea.removeChild(boost);
            speedBoosts.splice(index, 1);
        }
    });
}

// Update score display
function updateScore() {
    scoreDisplay.innerText = "Score: " + score;
}

// Reset game
function resetGame() {
    obstacles.forEach(obstacle => gameArea.removeChild(obstacle));
    speedBoosts.forEach(boost => gameArea.removeChild(boost));
    obstacles = [];
    speedBoosts = [];
    speed = 5;
    score = 0;
    updateScore();
}

// Game loop
function gameLoop() {
    // Move player towards mouse position
    positionX += (mousePositionX - positionX) * 0.1;
    player.style.left = `${positionX}px`;

    // Move obstacles and boosts
    moveObstacles();
    moveSpeedBoosts();

    // Create obstacles and boosts randomly
    if (Math.random() < 0.02) createObstacle();
    if (Math.random() < 0.01) createSpeedBoost();

    requestAnimationFrame(gameLoop);
}

gameLoop();
