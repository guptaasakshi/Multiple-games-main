let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("./music/food.mp3");
const gameOverSound = new Audio("./music/gameover.mp3");
const moveSound = new Audio("./music/move.mp3");
const musicSound = new Audio("./music/music2.mp3");

let speed = 5;
let lastPrintTime = 0;
let score = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };
let gamerName = prompt("Enter your name:");
document.getElementById("scored").innerHTML = `${gamerName} Score: ${score}`;
