const rocket = document.getElementById('rocket');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameActive = true;
let winTimeout; // Variable to store the timeout for losing

// Move rocket with mouse
document.addEventListener('mousemove', (event) => {
    const rocketPosition = rocket.getBoundingClientRect();
    const mouseX = event.clientX;

    // Move rocket within window bounds
    if (mouseX > 0 && mouseX < window.innerWidth) {
        rocket.style.left = `${mouseX - (rocketPosition.width / 2)}px`; // Center the rocket on mouse
    }
});

// Create enemy ships
function createEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    enemy.style.top = '0px';
    document.body.appendChild(enemy);
    
    // Move enemy downwards
    const moveInterval = setInterval(() => {
        const enemyPosition = enemy.getBoundingClientRect();
        if (enemyPosition.top >= window.innerHeight) {
            clearInterval(moveInterval);
            enemy.remove();
        } else {
            enemy.style.top = `${enemyPosition.top + 5}px`;
        }

        // Check for collision
        const rocketPosition = rocket.getBoundingClientRect();
        if (enemyPosition.bottom >= rocketPosition.top &&
            enemyPosition.left < rocketPosition.right &&
            enemyPosition.right > rocketPosition.left) {
            clearInterval(moveInterval);
            enemy.remove();
            score += 1;  // Increase score if hit
        }

        scoreDisplay.textContent = `Score: ${score}`;

        // Check for win condition
        if (score >= 20) {
            clearInterval(moveInterval);
            gameActive = false;
            clearTimeout(winTimeout); // Clear timeout if won
            alert("You win!");
            document.body.innerHTML = ''; // Clear the screen
        }
    }, 100);
}

// Create an enemy every second
const enemyInterval = setInterval(() => {
    if (gameActive) {
        createEnemy();
    }
}, 1000);

// Timer for losing condition
winTimeout = setTimeout(() => {
    if (gameActive) {
        gameActive = false;
        clearInterval(enemyInterval); // Stop creating enemies
        alert("You lose!");
        document.body.innerHTML = ''; // Clear the screen
    }
}, 60 * 1000); // 1 minute for losing condition
