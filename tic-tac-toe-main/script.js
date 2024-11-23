let music = new Audio("groove.mp3");
let yourturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";
let isgameover = false;
let playerX = "Player X";
let playerO = "Player O";
let playerXScore = 0;
let playerOScore = 0;

// Function to change the turn
const changeTurn = () => {
    return turn === "x" ? "o" : "x";
};

// Function to update the score display
const updateScore = () => {
    document.getElementById('playerXScore').innerText = `${playerX}: ${playerXScore}`;
    document.getElementById('playerOScore').innerText = `${playerO}: ${playerOScore}`;
};

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            let winner = boxtext[e[0]].innerText === "x" ? playerX : playerO;
            let loser = boxtext[e[0]].innerText === "x" ? playerO : playerX;

            // Update the score
            if (boxtext[e[0]].innerText === "x") {
                playerXScore++;
            } else {
                playerOScore++;
            }
            updateScore();

            // Announce the winner and loser
            document.querySelector('.info').innerText = `${winner} won, ${loser} lost!`;
            isgameover = true;
            gameover.play();
            document.querySelector('.img-box img').style.width = "150px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "20vw";
        }
    });
};

// Game Logic
document.getElementById('startGame').addEventListener('click', () => {
    playerX = document.getElementById('playerX').value || "Player X";
    playerO = document.getElementById('playerO').value || "Player O";
    document.querySelector('.info').innerText = `Turn for ${playerX}`;
    document.querySelector('.gamecontainer').style.display = 'flex';
    document.querySelector('.player-inputs').style.display = 'none';
    updateScore();
});

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            yourturn.play();
            music.play();
            checkWin();
            if (!isgameover) {
                document.querySelector('.info').innerText =
                    turn === "x" ? `Turn for ${playerX}` : `Turn for ${playerO}`;
            }
        }
    });
});

// Reset button logic
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });
    turn = "x";
    isgameover = false;
    document.querySelector('.line').style.width = "0";
    music.pause();
    music.currentTime = 0;
    document.querySelector('.info').innerText = `Turn for ${playerX}`;
    document.querySelector('.img-box img').style.width = "0";
});

