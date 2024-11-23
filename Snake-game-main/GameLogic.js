function gameEngine() {
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any key to restart!");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
        document.getElementById("scored").innerHTML = `${gamerName} Score: 0`;
        return;
    }

    // Check if food is eaten
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        foodSound.play();
        score += 1;
        document.getElementById("scored").innerHTML = `${gamerName} Score: ${score}`;
        food = { x: Math.floor(Math.random() * 18), y: Math.floor(Math.random() * 18) };
    }

    // Move snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Render
    const board = document.getElementById("board");
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add(index === 0 ? "head" : "snake");
        board.appendChild(snakeElement);
    });

    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}

// Add Event Listeners
window.addEventListener("keydown", (e) => {
    inputDir = { x: 0, y: 0 };
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            inputDir = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            inputDir = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            inputDir = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            inputDir = { x: 1, y: 0 };
            break;
    }
});

// Add Touch Controls
document.getElementById("up").addEventListener("click", () => (inputDir = { x: 0, y: -1 }));
document.getElementById("down").addEventListener("click", () => (inputDir = { x: 0, y: 1 }));
document.getElementById("left").addEventListener("click", () => (inputDir = { x: -1, y: 0 }));
document.getElementById("right").addEventListener("click", () => (inputDir = { x: 1, y: 0 }));

window.requestAnimationFrame(main);
// Handling touch inputs for mobile
document.getElementById('up').addEventListener('click', () => inputDir = {x: 0, y: -1});
document.getElementById('down').addEventListener('click', () => inputDir = {x: 0, y: 1});
document.getElementById('left').addEventListener('click', () => inputDir = {x: -1, y: 0});
document.getElementById('right').addEventListener('click', () => inputDir = {x: 1, y: 0});
